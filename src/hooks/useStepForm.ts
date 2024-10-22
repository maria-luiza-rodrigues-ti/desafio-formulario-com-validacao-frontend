import { useState } from "react";

export function useStepForm(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStep() {
    setCurrentStep((prevStep) =>
      prevStep < totalSteps - 1 ? prevStep + 1 : prevStep
    );
  }

  function previousStep() {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  }

  function goToStep(step: number) {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  }

  return { currentStep, nextStep, previousStep, goToStep };
}
