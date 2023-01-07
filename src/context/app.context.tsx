import React, { useState, createContext } from 'react'
import { PAGES } from '@/types/pages'

type ColorScheme = 'light' | 'dark' | 'system'
type TContext = {
  active: PAGES
  set?: React.Dispatch<React.SetStateAction<TState>>
  theme: { mode: ColorScheme; toggle: Function }
}
type TState = Omit<TContext, 'set'>

export const AppCxt = createContext<TContext>({
  active: PAGES.ABOUT,
  theme: { mode: 'light', toggle: () => null },
})

function AppCxtProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = useState<TState>({
    active: PAGES.ABOUT,
    theme: { mode: 'light', toggle: onThemeSwitch },
  })

  const setThemeValue = (themeValue: ColorScheme): void => {
    document.body.setAttribute('data-theme', themeValue)
    setState((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        mode: themeValue,
      },
    }))
  }

  function onThemeSwitch() {
    let value = (localStorage.getItem('theme') ||
      state.theme.mode) as ColorScheme

    value = value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', value)
    setThemeValue(value)
  }

  React.useEffect(() => {
    const fromLocalStore = localStorage.getItem('theme') as ColorScheme

    if (!fromLocalStore) {
      // document.documentElement.style.display = 'none'
      console.log({ fromLocalStore })

      if (window) {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
          const darkModeMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )

          let darkModeOn = darkModeMediaQuery.matches
          let themeValue = darkModeOn ? 'dark' : ('light' as ColorScheme)
          if (state.theme.mode == 'system') {
            setThemeValue(themeValue)
            localStorage.setItem('theme', themeValue)
          }

          darkModeMediaQuery.addEventListener('change', (e) => {
            console.log('Hello')
            darkModeOn = e.matches
            themeValue = darkModeOn ? 'dark' : ('light' as ColorScheme)
            setThemeValue(themeValue)
            localStorage.setItem('theme', themeValue)
          })
        }
      }
    } else {
      setThemeValue(fromLocalStore)
    }
  }, [state.theme.mode])

  return (
    <AppCxt.Provider value={{ ...state, set: setState }}>
      {children}
    </AppCxt.Provider>
  )
}
export default AppCxtProvider
