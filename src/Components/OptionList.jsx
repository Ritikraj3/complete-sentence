const OptionList = ({ options, selectedOptions, onSelect }) => (
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {options.map((option, index) => (
        <li key={index}>
          <button
            onClick={() => onSelect(option)}
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
  );
  
  export default OptionList;
  