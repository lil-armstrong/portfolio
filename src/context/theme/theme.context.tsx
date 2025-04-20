import { IThemeContextValue, TColorScheme } from '@/types/theme'
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'

export const ThemeCtx = createContext<IThemeContextValue>({
  mode: 'system',
  onChange(mode?: TColorScheme) {
    if (!mode) return
    localStorage.setItem('theme', mode)
    document.body.setAttribute('data-theme', mode)
  },
  onToggle() {
    const currentTheme =
      (localStorage.getItem('theme') as TColorScheme) || 'system'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    document.body.setAttribute('data-theme', newTheme)
  },
})

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<TColorScheme>('system')

  const setThemeMode = (themeValue: TColorScheme): void => {
    document.body.setAttribute('data-theme', themeValue)
    setTheme(themeValue)
  }

  function onModeChange(mode?: TColorScheme) {
    if (!mode) {
      const fromLocalStore = localStorage.getItem('theme') as TColorScheme
      const value = fromLocalStore === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', value)
      setThemeMode(value)
      return
    }
    setThemeMode(mode)
  }

  function onModeToggle() {
    let value = (localStorage.getItem('theme') || theme) as TColorScheme

    value = value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', value)
    setThemeMode(value)
  }

  function getBrowserTheme(): TColorScheme {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      return 'light'
    }
    return 'system' // If the media query is not supported
  }

  useEffect(() => {
    const fromLocalStore = localStorage.getItem('theme') as TColorScheme
    const mode = getBrowserTheme()

    setThemeMode(mode)

    if (!fromLocalStore) {
      if (window) {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
          const darkModeMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )

          let darkModeOn = darkModeMediaQuery.matches
          let themeValue: TColorScheme = darkModeOn ? 'dark' : 'light'
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

  const value = useMemo(
    () => ({
      mode: theme,
      onChange: onModeChange,
      onToggle: onModeToggle,
    }),
    [theme]
  )

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}
