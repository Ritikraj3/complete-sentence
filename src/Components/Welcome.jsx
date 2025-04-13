import React from "react";
import { useNavigate } from "react-router";

export default function Welcome() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/questionSet");
    const clickSound = new Audio("/Audio/kbcbreak.mp3");
    clickSound.play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] bg-yellow-100 pb-10 text-center  px-4">
      {/* Main Icon and Info */}
      <div className="flex flex-col items-center mt-10 space-y-6">
        <div className="text-4xl">📝</div>

        <h1 className="text-2xl font-bold text-black">Sentence Construction</h1>
        <p className="text-gray-500 max-w-md">
          Select the correct words to complete the sentence by arranging the
          provided options in the right order.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row gap-6 mt-10 text-center text-sm text-gray-700">
        <div>
          <p className="font-medium">Time Per Question</p>
          <p className="text-gray-500">30 sec</p>
        </div>
        <div className="hidden sm:block w-px bg-gray-300" />
        <div>
          <p className="font-medium">Total Questions</p>
          <p className="text-gray-500">10</p>
        </div>
        <div className="hidden sm:block w-px bg-gray-300" />
        <div>
          <p className="font-medium">Coins</p>
          <p className="flex items-center justify-center gap-1 text-gray-500">
            <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block" />
            0
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-4">
        <button className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
          Back
        </button>
        <button
          onClick={handleStart}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Start
        </button>
      </div>
    </div>
  );
}
