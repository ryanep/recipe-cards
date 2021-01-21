import { ThemeProvider } from 'styled-components';
import { SettingsProvider } from '#/context/settings';
import { theme } from '#/styles/theme';
import { ProvidersProps } from './types';

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider theme={theme}>
    <SettingsProvider>{children}</SettingsProvider>
  </ThemeProvider>
);
