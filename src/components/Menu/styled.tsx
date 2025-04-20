import styled from 'styled-components'

export const NonSelectablePopupWrapper = styled.div(() => ({
  userSelect: 'none',
  borderRadius: '0.5rem',
  padding: 4,
  height: 'auto'
}))

export const PoppableChildrenWrapperStyled = styled.div(() => ({
  padding: 4,
  zIndex: 0,
}))
