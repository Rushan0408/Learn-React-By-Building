import { useEffect, useState } from "react";

export default function useLocalStroage( key: string, defaultValue: string ): [string, React.Dispatch<React.SetStateAction<string>>] {

  const [theme, setTheme] = useState(() => {
    try {
        if (typeof window === "undefined") return defaultValue;
        return localStorage.getItem(key) || defaultValue;
    }
    catch(e) {
        return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, theme);
  }, [key, theme]);

  return [theme, setTheme];
}
