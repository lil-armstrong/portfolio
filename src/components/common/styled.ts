import styled from 'styled-components'

export const ContainerStyled = styled.section<{ bordered?: boolean }>(() => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  position: 'relative',
  overflowY: 'auto',
  overflowX: 'hidden',
  height: '100%',
  maxHeight: '100vh',
  boxSizing: 'border-box',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}))

export const InnerContainerStyled = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  overflowY: 'auto',
  overflowX: 'hidden',
  gap: 12,
  position: 'relative',
  boxSizing: 'border-box',
  zIndex: 1,
  maxHeight: '100vh',
  maxWidth: '100%',
  margin: '0 auto',

  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  '@media (min-width: 768px)': {
    maxWidth: 1024,
  },
}))

export const ContentBoxStyled = styled.section(() => ({
  display: 'flex',
  flexFlow: 'column wrap',
  padding: '20px ',
  gap: 30,
}))

export const SectionHeaderStyled = styled.header(() => ({
  position: 'relative',
  top: 0,
  left: 0,
  backgroundColor: 'var(--bg)',
  display: 'flex',
  flexFlow: 'column nowrap',
  padding: '20px 20px 10px',
  borderBottom: '1px solid var(--bg-accent)',
}))

export const SectionHeaderTitleStyled = styled.h3(() => ({
  letterSpacing: '-0.025em',
  fontWeight: 900,
  lineHieight: 0.5,
  textTransform: 'uppercase',
  fontSize: '2em',
  fontFamily: 'var(--display-font)',
  opacity: 0.6,
  color: 'var(--primary-accent)',
  background: 'linear-gradient(to bottom, var(--primary) 60%, transparent)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  minWidth: 200,
  width: '100%',
}))

export const SectionFooterStyled = styled.footer(() => ({
  border: '1px solid var(--bg-accent)',
  borderBottom: 0,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
  position: 'relative',
  padding: '10px 0px',
  bottom: 0,
  margin: '0 auto',
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '100%',
  boxShadow: 'var(--beam-shadow)',

  '@media (min-width: 768px)': {
    maxWidth: 1024,
  },
}))

export const ListContainerStyled = styled('section')(() => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  flexWrap: 'wrap',
}))

export const ListStyled = styled('ul')(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  height: '100%',
  width: '100%',
  gap: 10,
}))

export const ListItemStyled = styled('li')<{ $grow?: boolean }>(
  ({ $grow = false }) => ({
    flexGrow: $grow ? 1 : 0,
  })
)
