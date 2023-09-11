import React from 'react'
import { PAGES } from '@/types/pages'
import usePage from '@/hook/usePage'

interface TabPropsInterface {
  (props: {
    activeIndex: string | number | undefined
    setActiveIndex: React.Dispatch<React.SetStateAction<PAGES | undefined>>
  }): JSX.Element
}

export default function Tab({ children }: { children: TabPropsInterface }) {
  const page = usePage()
  const [activeIndex, setActiveIndex] = React.useState<PAGES>()

  React.useEffect(() => {
    if (page.activePage) {
      setActiveIndex(page.activePage)
    }
  }, [page.activePage])

  return children({ activeIndex, setActiveIndex })
}
