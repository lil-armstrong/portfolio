import styled from 'styled-components'

// flex lg:flex-row w-full flex-wrap items-end  justify-between
export const SectionNavContainerStyled = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexGrow: 1,
  zIndex: 10,
  width: '100%',
  padding: '0 20px',
  gap: 10,
}))

export const NavButtonStyled = styled('button')(() => ({
  padding: '8px 0',
  flexGrow: 0,
  minWidth: 150,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  background: 'transparent',

  borderRadius: 4,
  boxShadow: '0 4px 30px var(--bg)',

  '&:not(:disabled)': {
    cursor: 'pointer',
  },
}))
