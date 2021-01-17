import { spacing } from '#/styles/spacing';

export interface SpacerProps {
  size: keyof typeof spacing;
  direction?: 'horizontal' | 'vertical';
}

export interface SpacerStyleProps {
  size: keyof typeof spacing;
  direction?: 'horizontal' | 'vertical';
}
