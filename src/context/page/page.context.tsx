import { PAGES } from '@/types/pages'
import React, { PropsWithChildren, createContext, useState } from 'react'
import { iPageContext, iPageContextState } from './type'

export const PageContext = createContext<iPageContext>({
  activePage: null,
  onPageChange: () => {},
})

export const PageContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<iPageContextState>({
    activePage: null,
  })

  React.useEffect(() => {
    const url = new URL(window.location.href)
    const locationQuery = new URLSearchParams(url.search)

    if (locationQuery.has('page')) {
      const page = locationQuery.get('page') as PAGES
      if (Object.values(PAGES).includes(page))
        onPageChange(locationQuery.get('page') as PAGES)
    }
  }, [])

  function onPageChange(page: PAGES) {
    const url = new URLSearchParams('')
    url.append('page', page)
    window.history.pushState(
      { page: page },
      `Page change to ${page}`,
      `?${url.toString()}`
    )
    setState((prev) => ({ ...prev, activePage: page }))
  }
  return (
    <PageContext.Provider
      value={{
        onPageChange,
        activePage: state.activePage,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export default PageContextProvider
