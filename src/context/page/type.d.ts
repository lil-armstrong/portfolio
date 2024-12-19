import { PAGES } from '@/types/pages'

export interface iPageContextState {
  activePage: PAGES | null
}
export interface IPageContext extends iPageContextState {
  onPageChange: (page?: PAGES) => void
}
