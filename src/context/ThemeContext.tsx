import { createContext, useEffect, useState } from 'react'

interface ThemeContextInterface {
  currentValue: string
  onSwitch: Function
}

export const ThemeCtx = createContext<ThemeContextInterface | null>(null)

/* const themeReducer = (
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
}; */

export default function ThemeContextProvider(props: any) {
  const [theme, setTheme] = useState('light')
  function onSwitch() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => { }, [theme])
  
  return (
    <ThemeCtx.Provider value={{ onSwitch, currentValue: theme }}>
      {props?.children}
    </ThemeCtx.Provider>
  )
}
