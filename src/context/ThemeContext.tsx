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
  const [theme, setTheme] = useState('');

  const setThemeValue = (themeValue: string): void => {
    document.body.setAttribute('data-theme', themeValue)
    setTheme(themeValue)
  }

  function onSwitch() {
    const fromLocalStore = localStorage.getItem('theme');
    console.log(fromLocalStore)
    const value = fromLocalStore === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', value)
    setThemeValue(value);
  }

  useEffect(() => {
    const fromLocalStore = localStorage.getItem('theme');


    if(!fromLocalStore){
      // document.documentElement.style.display = 'none'


      if (window) {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
          const darkModeMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )

          let darkModeOn = darkModeMediaQuery.matches
          let themeValue = darkModeOn ? 'dark' : 'light'
          if (!theme) {
            setThemeValue(themeValue);
            localStorage.setItem('theme', themeValue)
          }

          darkModeMediaQuery.addEventListener('change', (e) => {
            darkModeOn = e.matches
            themeValue = darkModeOn ? 'dark' : 'light'
            setThemeValue(themeValue)
            localStorage.setItem('theme', themeValue)
          })
        }
      }
    }else{
      setThemeValue(fromLocalStore);
    }

  }, [theme])

  return (
    <ThemeCtx.Provider value={{ onSwitch, currentValue: theme }}>
    {props?.children}
    </ThemeCtx.Provider>
  )
}
