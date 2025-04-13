const QuestionDisplay = ({ renderedHtml }) => (
    <p
      className="text-lg text-gray-800 leading-8 mb-6 text-center"
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
  
  export default QuestionDisplay;
  