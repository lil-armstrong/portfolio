import React, { useRef, forwardRef, useState, useCallback } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Poppable, Movable } from 'webrix/components'
import styles from './style.module.scss'

const MovableRectangle = forwardRef(
  (
    { width, height, title }: { width: number; height: number; title: string },
    ref
  ) => {
    const { innerWidth, innerHeight } = window
    const [{ top, left }, setPosition] = useState({
      top: (innerHeight - height * 2) / 2,
      left: (innerWidth - width) / 2,
    })

    const handleOnMove: React.MouseEventHandler<HTMLElement> = useCallback(
      ({ clientX: cx, clientY: cy }) => {
        setPosition(({ top, left }) => ({
          top: top + cy,
          left: left + cx,
        }))
      },
      [setPosition]
    )

    return (
      <Movable
        className={title.toLowerCase()}
        title={title}
        style={{ top, left }}
        onBeginMove={handleOnMove}
        onMove={handleOnMove}
        ref={ref}
      />
    )
  }
)

function Menu() {
  const reference = useRef()
  const getPlacements = (rbr: any) => {
    return [
      { top: 100, left: 0 },
      { top: 100, left: 100 },
      { top: 0, left: 100 },
      { top: -100, left: 100 },
      { top: -100, left: 0 },
      { top: -100, left: -100 },
      { top: 0, left: -100 },
      { top: 100, left: -100 },
    ].map(({ top, left }) => ({ top: top + rbr.top, left: left + rbr.left }))
  }
  return (
    <>
      <div className={`${styles.container}`}>
        <MovableRectangle
          title="Reference"
          height={100}
          width={100}
          ref={reference}
        />
        <Poppable
          reference={reference}
          placements={getPlacements}
          className="poppable-target"
        >
          <BiMenu />
        </Poppable>
      </div>
    </>
  )
}

export default () => {
  return (
    <div className={`${styles.container}`}>
      <button
        className={`${styles.button} text-[20px] flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full`}
      >
        <BiMenu />
      </button>
    </div>
  )
}
