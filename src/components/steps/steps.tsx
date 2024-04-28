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
    <ul className="rounded-md border-2 border-neutral-700">
      {steps.map((step, stepIndex) => (
        <li
          className={cx(
            "border-b-2 border-neutral-700 font-bold bg-black last:border-b-0",
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

            <div>
              <h3 className="font-black uppercase text-red-500">
                Step {stepIndex + 1}
              </h3>

              <p>{step.name}</p>
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
};
