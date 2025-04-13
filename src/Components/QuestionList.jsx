import React, { useState } from 'react';
import questionsData from '../sample.json';

const QuestionList = () => {
  const timer = '0:15';

  const questions = questionsData.data.questions;
  const totalSteps = questions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = currentQuestionIndex + 1; // Dynamic progress

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) return;

    const updatedSelections = [...selectedOptions, option];
    setSelectedOptions(updatedSelections);

    if (updatedSelections.length === 4) {
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setSelectedOptions([]);
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center justify-start">
      {/* Header */}
      <div className="w-full max-w-3xl bg-white p-4 rounded-xl shadow mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-800 font-semibold text-sm">{timer}</span>
          <button className="text-sm font-medium px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            Quit
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-1">
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i < progress ? 'bg-yellow-400' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <p className="text-sm text-gray-500 mb-2">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700 mb-6">
          Select the missing words in the correct order
        </h2>

        <p className="text-lg text-gray-800 leading-8 mb-6 text-center">
          {currentQuestion.question}
        </p>

        {/* Option Buttons */}
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => handleOptionClick(option)}
                className={`w-full py-2 px-4 border rounded-md text-sm font-medium transition text-center ${
                  selectedOptions.includes(option)
                    ? 'bg-blue-100 text-blue-800 border-blue-300'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        {/* Selected Words */}
        {selectedOptions.length > 0 && (
          <div className="mb-2 text-center text-sm text-gray-600">
            Selected: <span className="font-medium">{selectedOptions.join(', ')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionList;
