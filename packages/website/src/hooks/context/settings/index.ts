import { useContext } from "react";
import { SettingsContext } from "#/context/settings";

export const useSettingsContext = () => {
  const settingsContext = useContext(SettingsContext);

  if (!settingsContext) {
    throw new Error("Settings consumer must be within a settings context");
  }

  return settingsContext;
};
