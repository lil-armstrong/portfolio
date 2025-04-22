import usePage from '@/hook/usePage'
import { PAGES } from '@/types/pages'
import cn from 'classnames'
import { BiBookAlt, BiBriefcase, BiCodeAlt } from 'react-icons/bi'
import { ContainerStyled, InnerWrapperStyled, SpanLinkStyled } from './styled'

function HeroNavigation() {
  const { onPageChange } = usePage()

  return (
    <ContainerStyled>
      <InnerWrapperStyled>
        <SpanLinkStyled
          className={cn('nav-link')}
          onClick={() => onPageChange(PAGES.WORK_EXP)}
        >
          <BiBriefcase/>
          Work Experience
        </SpanLinkStyled>
        <SpanLinkStyled
          className={cn('nav-link')}
          onClick={() => onPageChange(PAGES.PUBLICATION)}
        >
          <BiBookAlt/>
          Publications
        </SpanLinkStyled>
        <SpanLinkStyled
          className={cn('nav-link')}
          title="Go to projects"
          onClick={() => onPageChange(PAGES.PROJECT)}
        >
          <BiCodeAlt/>
          Projects
        </SpanLinkStyled>
      </InnerWrapperStyled>
    </ContainerStyled>
  )
}

export default HeroNavigation
