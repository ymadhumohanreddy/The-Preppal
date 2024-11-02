"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/db";
import { MockInterview } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { use } from "react";

function Interview({ params: paramsPromise }) {
  const params = use(paramsPromise); // Unwrap params
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => { 
   console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
      
    setInterviewData(result[0]);
  };

  return (
    <div className="my-10">
      <h2 className="font-serif  text-2xl ">Let's Begin Your Mock Interview!!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-6 font-sans">
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className=" font-serif text-lg font-medium">
              <strong>Job Role/Job Position:</strong>{" "}
              {interviewData ? interviewData.jobPosition : "Loading"}
            </h2>
            <h2 className="font-serif text-lg font-medium">
              <strong>Job Description/Tech Stack:</strong>{" "}
              {interviewData ? interviewData.jobDesc : "Loading"}
            </h2>
            <h2 className="font-serif text-lg font-medium">
              <strong>Years of Experience:</strong>{" "}
              {interviewData ? interviewData.jobExperience : "Loading"}
            </h2>
          </div>
          <div className="font-serif p-5 border rounded-lg border-[#4AA0E7] bg-blue-100">
            <h2 className="flex gap-2 items-center text-blue-600 ">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className=" font-serif mt-3 text-blue-600">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                marginLeft:100,
                height: 500,
                width: 500,
              }}
            />
          ) : (
            <>
              <WebcamIcon
                className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border cursor-pointer"
                onClick={() => setWebCamEnabled(true)}
              />
              <div className="flex justify-center items-center my-1">
                <Button
                  className="w-full hover:bg-[#8cbbe2] hover:text-white font-serif"
                  variant="ghost"
                  onClick={() => setWebCamEnabled(true)}
                >
                  Enable Web-Cam and Microphone
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
          <Button className="bg-[#5698ce] text-white hover:bg-blue-600 font-serif">
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
