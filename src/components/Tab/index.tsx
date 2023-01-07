import React from 'react'
import useAppCxt from '@/hook/app.hook'
import { PAGES } from '@/types/pages'
interface TabPropsInterface {
  (props: {
    activeIndex: string | number
    setActiveIndex: React.Dispatch<React.SetStateAction<PAGES>>
  }): JSX.Element
}

export default function Tab({ children }: { children: TabPropsInterface }) {
  const appCxt = useAppCxt()
  const [activeIndex, setActiveIndex] = React.useState<PAGES>(appCxt.active)

  return children({ activeIndex, setActiveIndex })
}
