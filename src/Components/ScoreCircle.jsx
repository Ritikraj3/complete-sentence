const ScoreCircle = ({ score }) => {
    const radius = 40;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
      circumference - (score / 100) * circumference;
  
    return (
      <div className="flex flex-col items-center">
        <svg height={100} width={100}>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={50}
            cy={50}
          />
          <circle
            stroke="#10b981"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference + ' ' + circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={50}
            cy={50}
          />
        </svg>
        <div className="absolute mt-[-64px] text-2xl font-bold text-green-600">{score}</div>
      </div>
    );
  };
  
  export default ScoreCircle;
  