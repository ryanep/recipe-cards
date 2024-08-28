"use client";
import { cx } from "classix";
import { useState } from "react";

interface StepsProps {
  readonly steps: {
    id: string;
    name: string;
  }[];
}

export const Steps = ({ steps }: StepsProps) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>();

  const handleStepClick = (stepIndex: number) => {
    if (selectedStepIndex === 0 && stepIndex === 0) {
      setSelectedStepIndex(undefined);

      return;
    }

    if (selectedStepIndex === stepIndex) {
      setSelectedStepIndex(stepIndex - 1);

      return;
    }

    setSelectedStepIndex(stepIndex);
  };

  return (
    <ul className="overflow-hidden rounded-md shadow-sm">
      {steps.map((step, stepIndex) => (
        <li
          className={cx(
            "border-b-2 dark:border-neutral-800 font-bold border-neutral-100 bg-white dark:bg-black last:border-b-0 motion-safe:transition-opacity",
            selectedStepIndex !== undefined && stepIndex <= selectedStepIndex
              ? "opacity-50"
              : undefined
          )}
          key={step.id}
        >
          <label className="block cursor-pointer p-4" htmlFor={step.id}>
            <input
              checked={
                selectedStepIndex !== undefined
                  ? stepIndex <= selectedStepIndex
                  : false
              }
              className="sr-only"
              id={step.id}
              onChange={() => {
                handleStepClick(stepIndex);
              }}
              type="checkbox"
              value={stepIndex}
            />

            <span className="block font-black uppercase text-blue-600 dark:text-blue-400">
              Step {stepIndex + 1}
            </span>

            {step.name}
          </label>
        </li>
      ))}
    </ul>
  );
};
