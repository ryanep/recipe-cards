import { createContext, useCallback, useMemo, useState } from 'react';
import {
  MeasurementsUnit,
  SettingsProviderContext,
  SettingsProviderProps,
} from './types';

export const SettingsContext = createContext<SettingsProviderContext>({
  servings: 2,
  units: 'metric',
  changeUnits: () => {},
  changeServings: () => {},
});

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [servings, setServings] = useState(2);
  const [units, setUnits] = useState<MeasurementsUnit>('metric');

  const changeServings = useCallback((servingsCount: number) => {
    setServings(servingsCount);
  }, []);

  const changeUnits = useCallback((measurementUnit: MeasurementsUnit) => {
    setUnits(measurementUnit);
  }, []);

  const value = useMemo(
    () => ({
      servings,
      units,
      changeUnits,
      changeServings,
    }),
    [servings, units]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
