import ResultQuestionCard from './ResultQuestionCard';
import ScoreCircle from './ScoreCircle';

const Result = ({ questions, userAnswers, score }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <ScoreCircle score={score} />
          <p className="text-gray-700 text-center mt-4">
            Here's how you did! Review your answers below to learn and improve.
          </p>
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => window.location.href = '/'} // adjust this path as needed
          >
            Go to Dashboard
          </button>
        </div>

        <div className="mt-10 space-y-6">
          {questions.map((q, index) => (
            <ResultQuestionCard
              key={q.questionId}
              question={q}
              index={index}
              userAnswer={userAnswers[index]}
              correctAnswer={q.correctAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
