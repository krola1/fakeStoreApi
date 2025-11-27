import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  ///  --- sets state to result of localstorage.getitem
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.error("could not read localstorage", error);
    }
  });

  /// --- monitors key, value and writes to localstorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("could not write to localstorage", error);
    }
  }, [key, value]);

  return [value, setValue];
}
