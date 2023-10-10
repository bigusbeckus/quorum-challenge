export function LoadingSpinner() {
  const _percent = 80;
  const _thickness = 20;

  const circleDimension = 50;
  const strokeWidth = circleDimension * (_thickness / 100);
  const radius = circleDimension - Math.floor(strokeWidth / 2);

  return (
    <div className="overflow-hidden p-1">
      <div className="animation-quick animate-spin">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          className="h-full w-full -rotate-90 animate-spin stroke-blue-600"
        >
          <circle
            cx={circleDimension}
            cy={circleDimension}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeDasharray={100}
            pathLength={100}
            strokeDashoffset={100 - _percent}
          />
        </svg>
      </div>
    </div>
  );
}
