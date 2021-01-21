import { ReactNode } from 'react';

export interface SettingsProviderProps {
  children: ReactNode;
}

export interface SettingsProviderContext {
  servings: number;
  changeServings: (servings: number) => void;
}
