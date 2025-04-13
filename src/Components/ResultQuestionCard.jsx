const ResultQuestionCard = ({ question, index, userAnswer, correctAnswer }) => {
  const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);

  return (
    <div className={`p-4 rounded-xl shadow-sm ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
      <p className="text-sm font-semibold text-gray-600 mb-2">
        Fill in the blank — Question {index + 1}
      </p>
      <p className="text-gray-900 mb-3">{question.question}</p>

      <p className="space-y-1">
        <span className="font-medium text-gray-700">Your response: </span>
        <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
          {userAnswer.join(', ')}
        </span>
      </p>

      {!isCorrect && (
        <p className="mt-1">
          <span className="font-medium text-gray-700">Correct answer: </span>
          <span className="text-green-600">{correctAnswer.join(', ')}</span>
        </p>
      )}
    </div>
  );
};

export default ResultQuestionCard;
