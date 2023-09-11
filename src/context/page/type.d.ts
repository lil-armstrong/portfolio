import { PAGES } from "@/types/pages"

export interface iPageContextState {
  activePage: PAGES | null
}
export interface iPageContext extends iPageContextState {
  onPageChange: (page: PAGES) => void
}
