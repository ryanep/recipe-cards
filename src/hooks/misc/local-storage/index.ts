import { useState } from "react";

export const useLocalStorage = <TValue>(
  key: string,
  initialValue: TValue
): [TValue, typeof setValue] => {
  const [storedValue, setStoredValue] = useState<TValue>(() => {
    try {
      const item = window.localStorage.getItem(key);
      const data = item ? (JSON.parse(item) as TValue) : initialValue;

      return data;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: TValue) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* eslint-disable-next-line no-console */
      console.error("Failed to set local storage value.");
    }
  };

  return [storedValue, setValue];
};
