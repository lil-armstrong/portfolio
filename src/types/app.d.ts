export interface IAppContext {
  activePage: PAGES
  setPage: (active: PAGES) => void
  setThemeMode: (mode: TColorScheme) => void
  set: React.Dispatch<React.SetStateAction<TThemeContextState>>
  theme: { mode: TColorScheme; toggle: () => void }
}
