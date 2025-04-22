import usePage from '@/hook/usePage'
import { PAGES } from '@/types/pages'
import React, { ReactElement } from 'react'
import {
  CopyrightStyled,
  DividerStyled,
  NavButtonStyled,
  SectionNavContainerStyled,
} from './styled'
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

  const currentYear = new Date().getFullYear()

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
    <>
      <SectionNavContainerStyled>
        <RenderSlot slot={leftSlot} />
        <CopyrightStyled>
          Copyright © [2022 - {currentYear}] | Ebong, Okposong
        </CopyrightStyled>
        <RenderSlot slot={rightSlot} />
      </SectionNavContainerStyled>
    </>
  )
}

export default SectionNavigationBar
