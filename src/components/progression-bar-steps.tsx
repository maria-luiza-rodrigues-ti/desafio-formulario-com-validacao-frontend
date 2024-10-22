interface ProgressionBarStepsProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export function ProgressionBarSteps({
  currentStep,
  setCurrentStep,
}: ProgressionBarStepsProps) {
  function handleChangeStep(step: number) {
    setCurrentStep(step);
  }

  return (
    <header>
      <nav className="mb-16 pb-8 border-b-2 border-neutral-100 flex items-center gap-4">
        <button
          onClick={() => handleChangeStep(0)}
          className="px-4 py-2 rounded-full bg-indigo-600 text-white
          }"
        >
          1
        </button>
        <div className="h-2 bg-neutral-200 w-full block rounded">
          <span
            className={`h-2 bg-indigo-600 block rounded transition-all duration-500 ease-in-out`}
            style={{
              width: currentStep === 0 ? "50%" : "100%",
            }}
          ></span>
        </div>

        <button
          onClick={() => handleChangeStep(1)}
          className={`px-4 py-2 rounded-full ${
            currentStep > 0
              ? "bg-indigo-600 text-white"
              : "bg-neutral-200 text-neutral-600"
          }`}
        >
          2
        </button>
        <div className="h-2 bg-neutral-200 w-full block rounded">
          <span
            className={`h-2 bg-indigo-600 block rounded transition-all duration-500 ease-in-out w-0`}
            style={{
              width: currentStep > 1 ? "100%" : currentStep === 1 ? "50%" : "0",
            }}
          ></span>
        </div>
        <button
          onClick={() => handleChangeStep(2)}
          className={`px-4 py-2 rounded-full ${
            currentStep === 2
              ? "bg-indigo-600 text-white"
              : "bg-neutral-200 text-neutral-600"
          }`}
        >
          3
        </button>
      </nav>
    </header>
  );
}
