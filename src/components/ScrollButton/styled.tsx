import styled from 'styled-components'

// flex items-center justify-center py-[8px] absolute left-0 top-[0] w-full h-[32px]
const ButtonStyled = styled.button(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 0',
  position: 'absolute',
  left: 0,
  width: '100%',
  height: '32px',
}))

export const TopButtonStyled = styled(ButtonStyled)(() => ({
  top: 0,
}))

export const BottomButtonStyled = styled(ButtonStyled)(() => ({
  bottom: 0,
}))
