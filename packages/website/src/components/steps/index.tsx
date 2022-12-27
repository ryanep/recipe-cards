import * as styled from "./styles";
import type { StepsProps } from "./types";

export const Steps = ({
  onStepClick,
  selectedStepIndex,
  steps,
}: StepsProps) => (
  <styled.List>
    {steps.map((step, index) => (
      <styled.Step isCurrent={index === selectedStepIndex + 1} key={step.id}>
        <styled.Label>
          <styled.Checkbox
            checked={index <= selectedStepIndex}
            onChange={() => {
              onStepClick(index);
            }}
            type="checkbox"
            value={index}
          />
          <styled.Content>
            <styled.Title>Step {index + 1}</styled.Title>
            <styled.Description>{step.description}</styled.Description>
          </styled.Content>
        </styled.Label>
      </styled.Step>
    ))}
  </styled.List>
);
