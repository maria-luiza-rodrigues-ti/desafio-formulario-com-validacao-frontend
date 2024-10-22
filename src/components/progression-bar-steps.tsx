import { useState } from "react";

interface ProgressionBarStepsProps {
  setCurrentStep: (step: number) => void;
}

export function ProgressionBarSteps({
  setCurrentStep,
}: ProgressionBarStepsProps) {
  const [stepIsActive, setStepIsActive] = useState(0);

  function handleChangeStep(step: number) {
    setStepIsActive(step);
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
              width: stepIsActive === 0 ? "50%" : "100%",
            }}
          ></span>
        </div>

        <button
          onClick={() => handleChangeStep(1)}
          className={`px-4 py-2 rounded-full ${
            stepIsActive > 0
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
              width:
                stepIsActive > 1 ? "100%" : stepIsActive === 1 ? "50%" : "0",
            }}
          ></span>
        </div>
        <button
          onClick={() => handleChangeStep(2)}
          className={`px-4 py-2 rounded-full ${
            stepIsActive === 2
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
