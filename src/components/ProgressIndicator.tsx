interface ProgressIndicatorProps {
    currentStep: number;
    totalSteps: number;
  }
  

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="progress-indicator">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i + 1}
          className={`progress-step ${currentStep === i + 1 ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}