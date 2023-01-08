import styles from './style.module.scss'
import React, { useCallback, useRef, forwardRef } from 'react'
import { Poppable } from 'webrix/components'
import cls from 'classnames'
const GAP = 5

const Reference = forwardRef((_, ref) => (
  <div
    className={cls(
      styles.reference,
      'text-black p-[12px] flex flex-col justify-center items-center '
    )}
    ref={ref}
  >
    REFERENCE
  </div>
))

const PoppableExample = () => {
  const reference = useRef()
  const placements = useCallback((rbr, tbr) => {
    const { vbefore, vcenter, vafter, hbefore, hcenter, hafter } =
      Poppable.Placements
    return [
      { ...vbefore(rbr, tbr, -GAP), ...hbefore(rbr, tbr, -GAP) }, // Top left
      { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr) }, // Top center
      { ...vbefore(rbr, tbr, -GAP), ...hafter(rbr, tbr, GAP) }, // Top right
      { ...vafter(rbr, tbr, GAP), ...hbefore(rbr, tbr, -GAP) }, // Bottom left
      { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr) }, // Bottom center
      { ...vafter(rbr, tbr, GAP), ...hafter(rbr, tbr, GAP) }, // Bottom left
      { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP) }, // Center left
      { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP) }, // Center right
    ]
  }, [])
  const props = {
    reference,
    placements,
    className: cls(
      styles.target,
      'text-black p-[12px] flex flex-col justify-center items-center'
    ),
  }
  const map = [
    'top left',
    'top center',
    'top right',
    'bottom left',
    'bottom center',
    'bottom right',
    'center left',
    'center right',
  ]
  const def = 6
  const [area, set] = React.useState(def)
  return (
    <>
      <Reference ref={reference} />
      <Poppable {...props} default={area}>
        {map[area]}
      </Poppable>

      <input
        type="number"
        name="area"
        id="area"
        min={0}
        max={7}
        defaultValue={area}
        className={cls(
          'text-md text-black font-bold bg-gray-300 mt-[30px] absolute bottom-[30px] w-[50%]  p-2'
        )}
        onChange={(e: Event) => set(e.target.value)}
      />
    </>
  )
}

function TestCmp({ children }: React.PropsWithChildren<{}>) {
  return (
    <div
      className={cls(
        'z-[10] w-screen bg-white h-screen fixed top-0 left-0 flex flex-col items-center justify-center'
      )}
    >
      <div
        className={cls(
          styles.container,
          'h-full w-full flex flex-col flex-grow items-center p-[30px] justify-center'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default () => (
  <TestCmp>
    <PoppableExample />
  </TestCmp>
)
