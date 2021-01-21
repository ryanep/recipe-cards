import { createContext, useCallback, useMemo, useState } from 'react';
import { SettingsProviderContext, SettingsProviderProps } from './types';

export const SettingsContext = createContext<SettingsProviderContext>({
  servings: 2,
  changeServings: () => {},
});

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [servings, setServings] = useState(2);

  const changeServings = useCallback((servingsCount: number) => {
    setServings(servingsCount);
  }, []);

  const value = useMemo(
    () => ({
      servings,
      changeServings,
    }),
    [servings]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
