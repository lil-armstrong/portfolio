import React from 'react'
import useAppCxt from '@/hook/app.hook'
import { PAGES } from '@/types/pages'

interface TabPropsInterface {
  (props: {
    activeIndex: string | number | undefined
    setActiveIndex: React.Dispatch<React.SetStateAction<PAGES | undefined>>
  }): JSX.Element
}

export default function Tab({ children }: { children: TabPropsInterface }) {
  const appCxt = useAppCxt()
  const [activeIndex, setActiveIndex] = React.useState<PAGES>()

  React.useEffect(() => {
    if (appCxt.active) {
      setActiveIndex(appCxt.active)
    }
  }, [appCxt.active])

  return children({ activeIndex, setActiveIndex })
}
