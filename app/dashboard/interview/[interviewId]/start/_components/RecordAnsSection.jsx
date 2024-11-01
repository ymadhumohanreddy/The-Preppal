"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Button } from '../../../../../../components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '../../../../../../utils/GeminiAIModal';
import { db } from '../../../../../../utils/db';
import { UserAnswer } from '../../../../../../utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnsSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.forEach((result) => {
      setUserAnswer(prevAns => prevAns + result?.transcript + ' '); // Added space for clarity
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
    
  }, [isRecording, userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      if(userAnswer?.length<10){
        toast("Bro c'mon,Can't you speak 10 words atleast!!")
        return;
      }
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    console.log(userAnswer);
    setLoading(true);
    
    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}, Depends on question ans user answer for give interview question. Please give us rating for answer and feedback as area of improvement if any in just 3 to 5 lines to improve it in JSON format with rating field and feedback field.`;

    try {
      const result = await chatSession.sendMessage(feedbackPrompt);

      
      if (result && result.response && typeof result.response.text === 'function') {
        const mockJsonResp = (await result.response.text()).replace(/```json|```/g, "").trim();
        const JsonFeedbackResp = JSON.parse(mockJsonResp);

        const resp = await db.insert(UserAnswer).values({
          mockIdRef: interviewData?.mockId,
          question: mockInterviewQuestion[activeQuestionIndex]?.question,
          correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
          userAns: userAnswer,
          feedback: JsonFeedbackResp?.feedback,
          rating: JsonFeedbackResp?.rating,
          userEmail: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-yyyy'),
        });

        if (resp) {
          toast('User Answer recorded successfully');
          setUserAnswer('');
          setResults([]);

        }
         setResults([]);
         setLoading(false);
      }
    } catch (error) {
      console.error('Error in UpdateUserAnswer:', error);
      toast('Error processing your answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        <Image 
          src="/webcam.png" 
          width={100} 
          height={100} 
          alt="Webcam icon" 
          className="absolute" 
        />
        <Webcam
          mirrored={true}
          style={{
            height: 350,
            width: '100%',
            zIndex: 10,
          }}
        />
      </div>
      
      <Button 
        disabled={loading}
        variant="outline" 
        className="my-10" 
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 animate-pulse flex gap-2 items-center">
            <StopCircle /> Stop Recording
          </h2>
        ) : (
          <h2 className='text-blue-600 flex gap-2 items-center hover:text-black transition-all'>
            <Mic /> Record Answer
          </h2> 
        )}
      </Button>
      
      
    </div>
  );
}

export default RecordAnsSection;
