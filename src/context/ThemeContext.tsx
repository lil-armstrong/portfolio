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
  const [theme, setTheme] = useState('')
  function onSwitch() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {
    // document.documentElement.style.display = 'none'
    const setThemeValue = (themeValue: string): void => {
      document.body.setAttribute('data-theme', themeValue)
      setTheme(themeValue)
    }

    if (window) {
      if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        const darkModeMediaQuery = window.matchMedia(
          '(prefers-color-scheme: dark)'
        )

        let darkModeOn = darkModeMediaQuery.matches
        let themeValue = darkModeOn ? 'dark' : 'light'
        if (!theme) {
          setThemeValue(themeValue)
        }

        darkModeMediaQuery.addEventListener('change', (e) => {
          darkModeOn = e.matches
          themeValue = darkModeOn ? 'dark' : 'light'
          setThemeValue(themeValue)

          // console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`)
        })
      }
    }
  }, [theme])

  return (
    <ThemeCtx.Provider value={{ onSwitch, currentValue: theme }}>
      {props?.children}
    </ThemeCtx.Provider>
  )
}
