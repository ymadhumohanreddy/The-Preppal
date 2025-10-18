"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { chatSession } from '../../../utils/GeminiAIModal';
import { db } from '../../../utils/db';
import { MockInterview } from '../../../utils/schema';
import { LoaderCircle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  console.log(jobPosition, jobDesc, jobExperience);

  const InputPrompt = `
You are a JSON-only API. Respond ONLY with valid JSON (no markdown, no explanations, no backticks).

Each item must have:
{
  "question": "Given your experience in ${jobPosition}, can you describe a challenging project or situation you handled related to ${jobDesc}? Focus on the obstacles, your approach, and the outcome.",
  "answer": "In my previous role at [Previous Company], I faced a challenge involving [...]. I overcame it by [...], leading to measurable improvements such as [...]."
}

Now, based on:
- Job Position: ${jobPosition}
- Job Description: ${jobDesc}
- Years of Experience: ${jobExperience}

Generate ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} realistic and detailed interview question-answer pairs following this structure.
Output must be a **valid JSON array only**, e.g.:
[
  {"question": "...", "answer": "..."},
  {"question": "...", "answer": "..."}
]
Ensure that all quotes and special characters are escaped properly.
`;

  try {
    // 1️⃣ Send prompt to model
    const result = await chatSession.sendMessage(InputPrompt);
    let rawResponseText = result?.response?.text?.() || result?.response || "";

    console.log("Raw Response:", rawResponseText);

    // 2️⃣ Remove markdown code fences (```json, ```)
    let cleanResponse = rawResponseText.replace(/```json|```/g, "").trim();

    // 3️⃣ Try extracting JSON array or object
    let jsonMatch = cleanResponse.match(/\[[\s\S]*\]/);
    if (!jsonMatch) jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      console.error("Error: No JSON detected in model response.");
      setJsonResponse(null);
      setLoading(false);
      return;
    }

    let finalJsonString = jsonMatch[0];

    // 🧹 4️⃣ Clean invalid JSON issues (quotes, newlines, etc.)
    finalJsonString = finalJsonString
  .replace(/[\u201C\u201D]/g, '"')   // smart quotes
  .replace(/[\u2018\u2019]/g, "'")   // smart apostrophes
  .replace(/\\(?!["\\/bfnrtu])/g, ""); // remove any invalid backslashes
// ✅ Do NOT manually escape newlines or tabs

    // 5️⃣ Try parsing the cleaned JSON
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(finalJsonString);
    } catch (err) {
      console.error("❌ JSON parse error:", err.message);
      console.error("🚨 Failing JSON snippet:", finalJsonString.slice(0, 500));
      setJsonResponse(null);
      setLoading(false);
      return;
    }

    // ✅ 6️⃣ Save parsed data
    setJsonResponse(parsedResponse);

    const resp = await db
      .insert(MockInterview)
      .values({
        mockId: uuidv4(),
        jsonMockResp: finalJsonString,
        jobPosition,
        jobDesc,
        jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      })
      .returning({ mockId: MockInterview.mockId });

    console.log("Inserted ID:", resp);

    if (resp?.[0]?.mockId) {
      setOpenDialog(false);
      router.push(`/dashboard/interview/${resp[0].mockId}`);
    } else {
      console.log("Error: No valid JSON response saved.");
    }
  } catch (error) {
    console.error("Error during interview generation:", error);
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <div
        className='p-16 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setOpenDialog(true)}
      >
        <h2 className='text-lg text-center'>+ Add New</h2>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className='font-serif text-xl text-blue-400'>Please share your interview details</DialogTitle>
            <div className="font-serif text-sm text-muted-foreground">
              <div className="mt-2 mb-6">
                Please add details about the job position/role, job description, and years of experience.
              </div>
              <form onSubmit={onSubmit}>
                <div className='mt-7 my-3 text-blue-400'>
                  <label htmlFor="jobPosition">Job Role/Job Position</label>
                  <Input
                    id="jobPosition"
                    placeholder="Ex. SDE-1"
                    required
                    className="text-black dark:text-white"  // Apply text-black for input text color
                    onChange={(e) => setJobPosition(e.target.value)}
                  />
                </div>
                <div className='my-3 text-blue-400'>
                  <label htmlFor="jobDesc">Job Description / Tech Stack</label>
                  <Textarea
                    id="jobDesc"
                    placeholder="Ex. DSA, React, Behavioral questions, etc."
                    required
                    className="text-black dark:text-white"  // Apply text-black for textarea text color
                    onChange={(e) => setJobDesc(e.target.value)}
                  />
                </div>
                <div className='my-3 text-blue-400'>
                  <label htmlFor="jobExperience">Years of Experience</label>
                  <Input 
                    id="jobExperience"
                    placeholder="Ex. 10"
                    type="number"
                    max="100"
                    required
                    className="text-black dark:text-white"  // Apply text-black for input text color
                    onChange={(e) => setJobExperience(e.target.value)}
                  />
                </div>
                <div className='flex gap-5 justify-end mt-6'>
                  <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-blue-400 hover:bg-blue-700" type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className='animate-spin' /> Generating from AI
                      </>
                    ) : 'Start Interview'}
                  </Button>
                </div>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;