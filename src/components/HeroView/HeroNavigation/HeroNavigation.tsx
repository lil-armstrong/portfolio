import usePage from '@/hook/usePage'
import { PAGES } from '@/types/pages'
import cn from 'classnames'
import { ContainerStyled, InnerWrapperStyled, SpanLinkStyled } from './styled'

function HeroNavigation() {
  const { onPageChange } = usePage()

  return (
    <ContainerStyled >
      <InnerWrapperStyled>
        <SpanLinkStyled
          className={cn('nav-link')}
          title="Go to projects"
          onClick={() => onPageChange(PAGES.PROJECT)}
        >
          Projects
        </SpanLinkStyled>
        <SpanLinkStyled
          className={cn('nav-link')}
          onClick={() => onPageChange(PAGES.WORK_EXP)}
        >
          Work Experience
        </SpanLinkStyled>
        <SpanLinkStyled
          className={cn('nav-link')}
          onClick={() => onPageChange(PAGES.BLOG)}
        >
          Blog
        </SpanLinkStyled>
      </InnerWrapperStyled>
    </ContainerStyled>
  )
}

export default HeroNavigation
