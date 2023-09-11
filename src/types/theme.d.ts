import { IAppContext } from './app'
import { PAGES } from './pages'

export type tColorScheme = 'light' | 'dark' | 'system'

export interface iThemeState {
  mode: tColorScheme
}
export interface iThemeContextValue extends iThemeState {
  onChange: (mode?: tColorScheme) => void
  onToggle: ()=> void 
}
