import React from 'react';
import { useLocation } from 'react-router-dom';
import Result from './Result';

const ResultContainer = () => {
  const { state } = useLocation();

  const { questions, userAnswers, score } = state;

  return (
    <Result
      questions={questions}
      userAnswers={userAnswers}
      score={score}
    />
  );
};

export default ResultContainer;
