import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../sample.json";
import QuestionContainer from "./QuestionContainer";

const QuestionList = () => {
  const questions = questionsData.data.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(30);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const blanks = (currentQuestion.question.match(/___/g) || []).length;

  useEffect(() => {
    setTimer(30);
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [currentQuestionIndex]);

  const handleOptionClick = (option) => {
    // Play click sound
    const clickSound = new Audio("/Audio/click-151673.mp3");
    clickSound.play();

    const updatedSelections = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelections);
  };

  const handleNextQuestion = () => {
    const clickSound = new Audio("/Audio/ding-sound-246413.mp3");
    clickSound.play();
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedOptions;
    setUserAnswers(updatedUserAnswers);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOptions([]);
      setTimer(30);
    } else {
      calculateAndNavigateToResult(updatedUserAnswers);
      const clickSound = new Audio("/Audio/notification-21-270139.mp3");
      clickSound.play();
    }
  };

  const calculateAndNavigateToResult = (finalAnswers) => {
    let correctCount = 0;

    questions.forEach((q, i) => {
      const isCorrect =
        JSON.stringify(finalAnswers[i]) === JSON.stringify(q.correctAnswer);
      if (isCorrect) correctCount += 1;
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);

    navigate("/ResultContainer", {
      state: {
        questions,
        userAnswers: finalAnswers,
        score: finalScore,
      },
    });
  };

  const handleQuit = () => {
    navigate("/");
  };

  const renderQuestionWithBlanks = () => {
    const parts = currentQuestion.question.split("___");
    let filled = "";

    for (let i = 0; i < parts.length; i++) {
      filled += parts[i];
      if (i < selectedOptions.length) {
        filled += `<strong>${selectedOptions[i]}</strong>`;
      } else if (i < blanks) {
        filled += `<span style="padding: 0 6px; border-bottom: 3px solid darkgray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</span>`;
      }
    }

    return filled;
  };

  const getBackgroundClass = () => {
    if (timer > 20) return "animate-soft-blink-green";
    if (timer > 10) return "animate-soft-blink-yellow";
    return "animate-soft-blink-red";
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className={`absolute inset-0 z-0 ${getBackgroundClass()}`} />
      <QuestionContainer
        timer={timer}
        onQuit={handleQuit}
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        questionHTML={renderQuestionWithBlanks()}
        options={currentQuestion.options}
        selectedOptions={selectedOptions}
        onSelect={handleOptionClick}
        showNextButton={selectedOptions.length === blanks}
        onNext={handleNextQuestion}
      />
    </div>
  );
};

export default QuestionList;
