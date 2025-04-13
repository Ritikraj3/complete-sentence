const ProgressBar = ({ total, current }) => (
    <div className="flex items-center space-x-1">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            i <= current ? 'bg-yellow-400' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
  
  export default ProgressBar;
  