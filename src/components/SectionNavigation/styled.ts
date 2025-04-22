import styled from 'styled-components'

// flex lg:flex-row w-full flex-wrap items-end  justify-between
export const SectionNavContainerStyled = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexGrow: 1,
  zIndex: 10,
  width: '100%',
  padding: '0 20px',
  gap: 10,
}))

export const NavButtonStyled = styled('button')(() => ({
  padding: '12px 24px',
  flexGrow: 0,
  minWidth: 150,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  position: 'relative',
  borderRadius: 4,
  background: 'transparent',
  fontWeight: 400,

  '&:not(:disabled)': {
    cursor: 'pointer',
    background: 'var(--bg-accent)',

    '&:hover': {
      background: 'var(--primary)',
      boxShadow: 'var(--beam-shadow)',
      color: 'var(--text-contrast)',
    },
  },
}))

export const DividerStyled = styled('div')(() => ({
  content: '""',
  display: 'block',
  width: 1,
  height: '100%',
  background: 'var(--bg-accent)',
  position: 'relative',
}))

export const CopyrightStyled = styled('div')(() => ({
  opacity: 0.45,
  textAlign: 'center',
  fontSize: 12,
  marginTop: 10,
  order: 3,
  width: '100%',

  '@media screen and (min-width: 768px)': {
    order: 0,
    width: 'auto',
  },
}))
