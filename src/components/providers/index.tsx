import { ThemeProvider } from 'styled-components';
import { theme } from '#/styles/theme';
import { ProvidersProps } from './types';

export const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
