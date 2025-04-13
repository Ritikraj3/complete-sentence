const NextButton = ({ show, onNext, isLastQuestion }) => {
  if (!show) return null;

  return (
    <button
      onClick={onNext}
      className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
    >
      {isLastQuestion ? 'Result' : 'Next Question'}
    </button>
  );
};

export default NextButton;
