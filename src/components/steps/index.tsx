import { StepsProps } from './types';
import * as styled from './styles';
import { ChangeEvent, useState } from 'react';

export const Steps = ({ steps }: StepsProps) => {
  const [selectedSteps, setSelectedSteps] = useState<string[]>([]);

  const handleStepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (selectedSteps.includes(value)) {
      setSelectedSteps((steps) => steps.filter((step) => step !== value));
      return;
    }

    setSelectedSteps((step) => [...step, value]);
  };

  return (
    <styled.List>
      {steps.map((step) => (
        <styled.Ingredient>
          <label>
            <input
              type="checkbox"
              onChange={handleStepChange}
              value={step.description}
              checked={selectedSteps.includes(step.description)}
            />
            {step.description}
          </label>
        </styled.Ingredient>
      ))}
    </styled.List>
  );
};
