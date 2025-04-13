const QuestionTimer = ({ timer, onQuit }) => (
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-800 font-semibold text-sm">
        {timer < 10 ? `0:0${timer}` : `0:${timer}`}
      </span>
      <button
        onClick={onQuit}
        className="text-sm font-medium px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition"
      >
        Quit
      </button>
    </div>
  );
  
  export default QuestionTimer;
  