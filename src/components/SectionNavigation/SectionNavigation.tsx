import usePage from '@/hook/usePage'
import { PAGES } from '@/types/pages'
import React, { ReactElement } from 'react'
import { DividerStyled, NavButtonStyled, SectionNavContainerStyled } from './styled'
interface ISlot {
  content: ReactElement | string | null
  to?: PAGES
}

type Props = React.PropsWithChildren<{
  leftSlot?: ISlot
  rightSlot?: ISlot
}>

function SectionNavigationBar({ leftSlot, rightSlot }: Props) {
  const setPage = usePage().onPageChange

  const RenderSlot = React.useCallback(
    ({
      slot,
    }: React.PropsWithChildren<{
      slot?: ISlot
    }>) => {
      return slot ? (
        <NavButtonStyled
          disabled={!slot.content}
          onClick={() => setPage && slot.to && setPage(slot.to)}
        >
          {slot.content}
        </NavButtonStyled>
      ) : null
    },
    [setPage]
  )

  return (
    <SectionNavContainerStyled>
      <RenderSlot slot={leftSlot} />
      <RenderSlot slot={rightSlot} />
    </SectionNavContainerStyled>
  )
}

export default SectionNavigationBar
