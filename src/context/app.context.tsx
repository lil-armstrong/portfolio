import React, { useState, createContext } from 'react'
import { PAGES } from '@/types/pages'

type ColorScheme = 'light' | 'dark' | 'system'
type TContext = {
  active: PAGES | null
  setPage: (active: PAGES) => void
  setThemeMode: (mode: ColorScheme) => void
  set: React.Dispatch<React.SetStateAction<TState>>
  theme: { mode: ColorScheme; toggle: Function }
}
type TState = Omit<TContext, 'set'>

export const AppCxt = createContext<TContext>({
  setThemeMode: () => null,
  active: null,
  set: () => null,
  theme: {
    mode: 'light',
    toggle: () => null,
  },
  setPage: () => null,
})

function AppCxtProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = useState<TState>({
    active: null,
    setPage,
    setThemeMode,
    theme: { mode: 'light', toggle: onThemeSwitch },
  })

  React.useEffect(() => {
    const url = new URL(window.location.href)
    const search = new URLSearchParams(url.search)

    if (search.has('page')) {
      const page = search.get('page') as PAGES
      if (Object.values(PAGES).includes(page))
        setPage(search.get('page') as PAGES)
    }
  }, [])

  function setPage(active: PAGES) {
    const url = new URLSearchParams('')
    url.append('page', active)
    window.history.pushState(
      { page: active },
      `Page change to ${active}`,
      `?${url.toString()}`
    )
    setState((prev) => ({ ...prev, active }))
  }

  function setThemeMode(themeValue: ColorScheme) {
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
    setThemeMode(value)
  }

  React.useEffect(() => {
    const fromLocalStore = localStorage.getItem('theme') as ColorScheme

    if (!fromLocalStore) {
      // document.documentElement.style.display = 'none'

      if (window) {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
          const darkModeMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )

          let darkModeOn = darkModeMediaQuery.matches
          let themeValue = darkModeOn ? 'dark' : ('light' as ColorScheme)
          if (state.theme.mode == 'system') {
            setThemeMode(themeValue)
            localStorage.setItem('theme', themeValue)
          }

          darkModeMediaQuery.addEventListener('change', (e) => {
            console.log('Hello')
            darkModeOn = e.matches
            themeValue = darkModeOn ? 'dark' : ('light' as ColorScheme)
            setThemeMode(themeValue)
            localStorage.setItem('theme', themeValue)
          })
        }
      }
    } else {
      setThemeMode(fromLocalStore)
    }
  }, [state.theme.mode])

  return (
    <AppCxt.Provider value={{ ...state, set: setState }}>
      {children}
    </AppCxt.Provider>
  )
}
export default AppCxtProvider
