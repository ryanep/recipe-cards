export interface StepsProps {
  steps: {
    id: string;
    description: string;
  }[];
}

export interface StepStyleProps {
  isCurrent: boolean;
}
