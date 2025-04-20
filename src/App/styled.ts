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
