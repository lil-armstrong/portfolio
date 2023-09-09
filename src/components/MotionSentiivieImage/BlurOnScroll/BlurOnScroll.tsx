import React from 'react'
import { FunctionComponent, PropsWithChildren } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface BlurOnScrollProps extends PropsWithChildren {
  y?: number
}

const BlurOnScroll: FunctionComponent<BlurOnScrollProps> = ({
  children,
  y = 10,
}) => {
  const [scrollY, setScrollY] = React.useState(y)
  const [blur, setBlur] = React.useState(calcBlurValueFromScrollPosition(y))
  const scrollProps = useSpring({
    blur: Math.ceil(blur),
  })
  function calcBlurValueFromScrollPosition(yValue: number) {
    var totalScrollableHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
    return Math.abs(Math.ceil((yValue / totalScrollableHeight) * 100))
  }

  const handleScrollEvent = () => {
    const windowScrollHeight = window.scrollY
    setScrollY(windowScrollHeight)
  }

  React.useEffect(() => {
    setBlur(calcBlurValueFromScrollPosition(scrollY))
  }, [scrollY])

  React.useEffect(() => {
    handleScrollEvent()
    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return (
    <animated.span
      style={{
        filter: scrollProps.blur.to((val) => `blur(${val}px)`),
        transition: 'filter 50ms',
        width: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      data-cy="scroll-blur"
    >
      <div
        data-cy="test-value"
        style={{
          position: 'sticky',
          top: 10,
          left: 10,
        }}
        hidden
      >{`${scrollY}/${blur}`}</div>
      {children}
    </animated.span>
  )
}

export default BlurOnScroll
