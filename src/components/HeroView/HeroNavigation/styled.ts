import styled from 'styled-components'

export const SpanLink = styled('span')(() => ({
  paddingTop: 10,
  paddingBottom: 10,
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  flexGrow: 0,
  columnGap: 8,
  opacity: 0.5,
  cursor: 'pointer',
  ['&:hover']: {
    opacity: 1,
  },
}))

export const ContainerStyled = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  padding: 20,
  width: '100%',
  position: 'absolute',
  bottom: 0,
}))

// flex flex-row justify-evenly w-full items-center mt-[100px] flex-wrap gap-2
export const InnerWrapperStyled = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  width: '100%',
  alignItems: 'center',
  gap: 4,
  maxWidth: 800,

  '@media (max-width: 768px)': {
    margin: '0 auto'
  },
}))

export const SpanLinkStyled = styled(SpanLink)(() => ({
  padding: '8px 12px',
  flexGrow: 0,
  textAlign: 'center',
}))
