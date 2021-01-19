import { StepsProps } from "./types";
import * as styled from "./styles";
import { ChangeEvent, useState } from "react";

export const Steps = ({ steps }: StepsProps) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleStepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const stepIndex = parseInt(value, 10);
    setCurrentIndex((prevIndex) =>
      prevIndex === stepIndex ? stepIndex - 1 : stepIndex
    );
  };

  return (
    <styled.List>
      {steps.map((step, index) => (
        <styled.Step key={step.id} isCurrent={index === currentIndex + 1}>
          Step {index + 1}
          <styled.Label>
            <input
              type="checkbox"
              onChange={handleStepChange}
              value={index}
              checked={index <= currentIndex}
            />
            {step.description}
          </styled.Label>
        </styled.Step>
      ))}
    </styled.List>
  );
};
