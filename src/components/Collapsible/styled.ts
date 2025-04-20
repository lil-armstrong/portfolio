import styled from 'styled-components'

export const ActionButtonStyled = styled.button(() => ({
  marginTop: 20,
  marginBottom: 20,
  padding: 8,
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
  appearance: 'none',
  userSelect: 'none',
  border: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  textAlign: 'center',
  boxShadow: 'var(--beam-shadow)',
}))

export const WrapperStyled = styled.nav<{ $isExpanded?: boolean }>(
  ({ $isExpanded }) => {
    return {
      display: $isExpanded ? 'none' : 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--beam-shadow)',
      padding: '8px',
      borderRadius: '12px',
      zIndex: 10,
      opacity: 1,
      animation: 'bounceInRight',
      animationDuration: '1s',
      background: 'var(--bg)',
      position: 'absolute',
      bottom: 70,
      right: 0,

      button: {
        '&:focus': {
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
        },
        '&:disabled': {
          opacity: 0.25,
        },
        '&:not(:disabled):hover': {
          background: 'var(--primary)',
          color: 'var(--primary-contrast)',
        },
      },
    }
  }
)
