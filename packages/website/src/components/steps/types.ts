export interface StepsProps {
  onStepClick: (stepIndex: number) => void;
  selectedStepIndex: number;
  steps: {
    description: string;
    id: string;
  }[];
}

export interface StepStyleProps {
  isCurrent: boolean;
}
