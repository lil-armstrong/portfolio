import styled from 'styled-components'

export const ContainerStyled = styled('div')(() => ({
  padding: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 0,
  margin: '0 auto',
}))

export const HeaderContainerStyled = styled('div')(() => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  position: 'relative',
  top: '50vh',
  zIndex: 0,
}))
