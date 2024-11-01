"use client";
import { db } from '../../../../../utils/db';
import { UserAnswer } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import React, { use, useEffect, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';
import { useRouter } from 'next/navigation';

function Feedback({ params: paramsPromise }) {
  const params = use(paramsPromise); // Unwrap params
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter(); // Use the router here

  useEffect(() => {
    console.log(params.interviewId);
    GetFeedback();
  }, [params.interviewId]); // Add params.interviewId as a dependency

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log("Feedback Results:", result); // Log the results to check
    setFeedbackList(result);
  };

  return (
    <div className='p-10'>
      {feedbackList.length === 0 ? (
        <h2 className='font-serif  text-xl text-gray-500'>No Interview Feedback Record Found</h2>
      ) : (
        <>
          <h2 className='text-3xl font-serif  text-green-500'>Congratulations!</h2>
          <h2 className='font-serif  text-2xl'>Here is your interview feedback</h2>
          <h2 className='text-sm text-gray-500'>Find below interview questions with correct answers, your answers, and feedback for improvement:</h2>
          
          {feedbackList.map((item) => (
            <Collapsible key={item.id} className='mt-7'> {/* Use item.id if it's unique */}
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
                {item.question} <ChevronsUpDown className='h-5 w-5' />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating:</strong> {item.rating}</h2>
                  <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'><strong>Feedback: </strong>{item.feedback}</h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}
      <div className='gap-5'>

      
      <Button className='bg-blue-400 hover:bg-green-600 transition-all mt-3'onClick={() => router.replace('/dashboard')}>New Interview</Button>
      <Button className='bg-blue-400 hover:bg-red-600 transition-all  mt-3 ml-5'onClick={() => router.replace('/dashboard/interview/'+interview?.mockId)}>Retry</Button>
      </div>
    </div>
  );
}

export default Feedback;
