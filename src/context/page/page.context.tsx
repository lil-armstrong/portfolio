import { PAGES } from '@/types/pages'
import React, { PropsWithChildren, createContext, useState } from 'react'
import { IPageContext, iPageContextState } from './type'

export const PageContext = createContext<IPageContext>({
  activePage: null,
  // No-op function to satisfy the context's default value
  onPageChange: () => {
    // This will be replaced by the actual implementation in the provider
  },
})

export const PageContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<iPageContextState>({
    activePage: null,
  })

  React.useEffect(() => {
    const url = new URL(window.location.href)
    const urlQuery = new URLSearchParams(url.search)

    if (urlQuery.has('page')) {
      const page = urlQuery.get('page') as PAGES
      if (Object.values(PAGES).includes(page))
        onPageChange(urlQuery.get('page') as PAGES)
    }
  }, [])

  function onPageChange(page?: PAGES) {
    if (!page) {
      const url = new URL(window.location.href)
      url.search = '' // Clear the query string
      window.history.replaceState(null, '', url.toString())
      setState((prev) => ({ ...prev, activePage: null }))

      return
    }

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
