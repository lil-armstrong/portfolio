import { tColorScheme, iThemeContextValue, iThemeState } from '@/types/theme'
import { createContext, useEffect, useState } from 'react'

export const ThemeCtx = createContext<iThemeContextValue>({
  mode: 'system',
  onChange() {},
  onToggle() {},
})

export default function ThemeContextProvider(props: any) {
  const [theme, setTheme] = useState<iThemeState>({
    mode: 'system',
  })

  const setThemeMode = (themeValue: tColorScheme): void => {
    document.body.setAttribute('data-theme', themeValue)
    setTheme((prev) => ({ ...prev, mode: themeValue }))
  }

  function onModeChange(mode?: tColorScheme) {
    if (!mode) {
      const fromLocalStore = localStorage.getItem('theme') as tColorScheme
      const value = fromLocalStore === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', value)
      setThemeMode(value)
      return
    }
    setThemeMode(mode)
  }

  function onModeToggle() {
    let value = (localStorage.getItem('theme') || theme.mode) as tColorScheme

    value = value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', value)
    setThemeMode(value)
  }

  useEffect(() => {
    const fromLocalStore = localStorage.getItem('theme') as tColorScheme

    if (!fromLocalStore) {
      // document.documentElement.style.display = 'none'

      if (window) {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
          const darkModeMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )

          let darkModeOn = darkModeMediaQuery.matches
          let themeValue: tColorScheme = darkModeOn ? 'dark' : 'light'
          if (!theme) {
            setThemeMode(themeValue)
            localStorage.setItem('theme', themeValue)
          }

          darkModeMediaQuery.addEventListener('change', (e) => {
            darkModeOn = e.matches
            themeValue = darkModeOn ? 'dark' : 'light'
            setThemeMode(themeValue)
            localStorage.setItem('theme', themeValue)
          })
        }
      }
    } else {
      setThemeMode(fromLocalStore)
    }
  }, [])

  return (
    <ThemeCtx.Provider
      value={{
        mode: theme.mode,
        onChange: onModeChange,
        onToggle: onModeToggle,
      }}
    >
      {props?.children}
    </ThemeCtx.Provider>
  )
}
