export type TColorScheme = 'light' | 'dark' | 'system'

export interface IThemeState {
  mode: TColorScheme
}
export interface IThemeProps {
  /**
   * Mode should be a stateful property.
   * It determines the state of the icon
   */
  mode?: TColorScheme
  /**
   * Function to handle the change in theme action
   * @returns
   */
  onChange?: () => void
}
export interface IThemeContextValue extends IThemeState {
  onChange: (mode?: TColorScheme) => void
  onToggle: () => void
}
