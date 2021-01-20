export interface StepsProps {
  steps: {
    id: string;
    description: string;
  }[];
  onStepClick: (stepIndex: number) => void;
  selectedStepIndex: number;
}

export interface StepStyleProps {
  isCurrent: boolean;
}
