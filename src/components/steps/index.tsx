import { StepsProps } from "./types";
import * as styled from "./styles";

export const Steps = ({
  steps,
  selectedStepIndex,
  onStepClick,
}: StepsProps) => {
  return (
    <styled.List>
      {steps.map((step, index) => (
        <styled.Step key={step.id} isCurrent={index === selectedStepIndex + 1}>
          <styled.Label>
            <styled.Checkbox
              type="checkbox"
              onChange={() => onStepClick(index)}
              value={index}
              checked={index <= selectedStepIndex}
            />
            <styled.Indicator>{index + 1}</styled.Indicator>
            {step.description}
          </styled.Label>
        </styled.Step>
      ))}
    </styled.List>
  );
};
