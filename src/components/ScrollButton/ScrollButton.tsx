import usePage from '@/hook/usePage'
import { PAGES } from '@/types/pages'
import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

const iconSize = 16

export const ScrollButton = () => {
  const { activePage, onPageChange } = usePage()
  const isTopDisabled = React.useMemo(() => activePage === null, [activePage])
  const isBottomDisabled = React.useMemo(() => !!activePage, [activePage])
  const previousValidPage = React.useRef<PAGES>(PAGES.ABOUT)

  const handleScrollUp = React.useCallback(() => {
    onPageChange()
  }, [])

  const handleScrollDown = React.useCallback(() => {
    console.debug(previousValidPage.current)
    onPageChange(previousValidPage.current)
  }, [])

  React.useEffect(() => {
    if (activePage) {
      previousValidPage.current = activePage
    }
  }, [activePage])

  return (
    <>
      <button
        disabled={isTopDisabled}
        onClick={handleScrollUp}
        className="flex items-center justify-center py-[8px] absolute left-0 top-[0] w-full h-[32px]"
      >
        <AiOutlineCaretUp aria-label="scroll up" size={iconSize} />
      </button>
      <button
        disabled={isBottomDisabled}
        onClick={handleScrollDown}
        className="flex items-center justify-center py-[8px] absolute left-0 bottom-[0] w-full h-[30px]"
      >
        <AiOutlineCaretDown aria-label="scroll down" size={iconSize} />
      </button>
    </>
  )
}

export default ScrollButton
