import { createContext, useMemo } from "react";
import { useLocalStorage } from "#/hooks/misc/local-storage";
import { MeasurementsUnit } from "./types";
import type { SettingsProviderContext, SettingsProviderProps } from "./types";

export const SettingsContext = createContext<
  SettingsProviderContext | undefined
>(undefined);

const defaultServings = 2;
const defaultUnits = MeasurementsUnit.Metric;

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [servings, setServings] = useLocalStorage<number>(
    "servings",
    defaultServings
  );
  const [units, setUnits] = useLocalStorage<MeasurementsUnit>(
    "units",
    defaultUnits
  );

  const value = useMemo(
    () => ({
      changeServings: setServings,
      changeUnits: setUnits,
      servings,
      units,
    }),
    [servings, units, setServings, setUnits]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
