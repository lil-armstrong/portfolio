import { Context, createContext, useEffect, useReducer, useState } from "react";
interface ThemeConfigInterface {
  currentValue: string;
}
interface ThemeContextInterface {
  currentValue: string;
  onSwitch: Function;
}

export const ThemeCtx = createContext<ThemeContextInterface | null>(null);

const themeReducer = (
  state: any,
  action: { type: string; value: any }
): any => {
  switch (action?.type) {
    case "": {
      return;
    }
    default: {
      return state;
    }
  }
};
const defaultConfig: ThemeConfigInterface = {
  currentValue: "light",
};

export default function ThemeContextProvider(props: any) {
  const [theme, setTheme] = useState("light");
  function onSwitch() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <ThemeCtx.Provider value={{ onSwitch, currentValue: theme }}>
      {props?.children}
    </ThemeCtx.Provider>
  );
}
