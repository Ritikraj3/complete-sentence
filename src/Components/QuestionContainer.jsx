import QuestionTimer from './QuestionTimer';
import ProgressBar from './ProgressBar';
import QuestionDisplay from './QuestionDisplay';
import OptionList from './OptionList';
import NextButton from './NextButton';

const QuestionContainer = ({
  timer,
  onQuit,
  currentIndex,
  totalQuestions,
  questionHTML,
  options,
  selectedOptions,
  onSelect,
  showNextButton,
  onNext,
}) => (
  <div className="relative z-10 py-8 px-4 flex flex-col items-center justify-start">
    <div className="w-full max-w-3xl bg-white p-4 rounded-xl shadow mb-6">
      <QuestionTimer timer={timer} onQuit={onQuit} />
      <ProgressBar total={totalQuestions} current={currentIndex} />
    </div>

    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 sm:p-8">
      <p className="text-sm text-gray-500 mb-2">
        Question {currentIndex + 1} of {totalQuestions}
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700 mb-6">
        Fill in the blanks by selecting the correct words
      </h2>

      <QuestionDisplay renderedHtml={questionHTML} />
      <OptionList
        options={options}
        selectedOptions={selectedOptions}
        onSelect={onSelect}
      />
      <NextButton show={showNextButton} onNext={onNext} />
    </div>
  </div>
);

export default QuestionContainer;
