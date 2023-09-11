import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

export const ScrollButton = () => {
  const [isTopDisabled, setDisableTop] = React.useState(window.scrollY === 0)

  const [isBottomDisabled, setDisableBottom] = React.useState(
    window.scrollY !== 0 &&
      window.scrollY >=
        Math.abs(
          document.body.scrollHeight -
            document.body.clientHeight -
            document.body.scrollTop
        )
  )

  const handleScrollUp = React.useCallback(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }, [])

  const handleScrollDown = React.useCallback(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: window.innerHeight,
    })
  }, [])

  React.useEffect(() => {
    const onScroll = () => {
      setDisableTop(window.scrollY === 0)
      setDisableBottom(
        window.scrollY >=
          Math.abs(
            document.body.scrollHeight -
              document.body.clientHeight -
              document.body.scrollTop
          )
      )
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const iconSize = 16

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
