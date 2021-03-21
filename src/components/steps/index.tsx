import * as styled from './styles';
import { StepsProps } from './types';

export const Steps = ({
  steps,
  selectedStepIndex,
  onStepClick,
}: StepsProps) => (
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
          <styled.Title>Step {index + 1}</styled.Title>
          <styled.Content>{step.description}</styled.Content>
        </styled.Label>
      </styled.Step>
    ))}
  </styled.List>
);
