import './style.scss'
import { PAGES } from '@/types/pages'
import useAppCxt from '@/hook/app.hook'
import React from 'react'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
type TSlot = { content: string; to: PAGES }

type Props = React.PropsWithChildren<{
  leftSlot?: TSlot
  leftComponent?: JSX.Element
  rightSlot?: TSlot
  rightComponent?: JSX.Element
}>

function BottomNavigation(props: Props) {
  const setPage = useAppCxt().setPage

  const RenderSlot = React.useCallback(
    ({
      slot,
      component,
      children,
      right,
    }: React.PropsWithChildren<{
      slot?: TSlot
      right?: boolean
      component?: JSX.Element
    }>) => {
      if (component) return component
      else if (slot) {
        return (
          <button 
            className={`cursor-pointer px-[25px] nav-link ${
              right ? 'justify-end' : 'justify-start'
            }`}
            onClick={() => setPage && setPage(slot.to)}
          >
            {!right && children}
            {slot.content}
            {right && children}
          </button>
        )
      }
      return null
    },
    [setPage]
  )

  return (
    <div className="flex lg:flex-row bottom_nav w-full flex-wrap items-end  justify-between">
      <RenderSlot slot={props.leftSlot} component={props.leftComponent}>
        <AiOutlineLeftCircle aria-label='(Go to previous)'/>
      </RenderSlot>
      <RenderSlot component={props.rightComponent} right slot={props.rightSlot}>
        <AiOutlineRightCircle aria-label='(Go to next)' />
      </RenderSlot>
    </div>
  )
}

export default BottomNavigation
