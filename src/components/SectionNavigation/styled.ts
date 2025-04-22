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
  padding: '0 12px',
  gap: 8,
}))

export const NavButtonStyled = styled('button')(() => ({
  padding: '12px 24px',
  flexGrow: 1,
  width: 180,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  position: 'relative',
  borderRadius: 4,
  background: 'transparent',
  fontWeight: 400,
  cursor: 'default',

  '@media (min-width: 768px)': {
    flexGrow: 0,
  },

  '&:not(:disabled)': {
    cursor: 'pointer',
    background: 'var(--bg-accent)',
    border: '1px solid var(--bg-contrast)',

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
  height: 'auto',
  background: 'var(--bg-contrast)',
  position: 'relative',
  margin: '0 12px',
}))

export const CopyrightStyled = styled('div')(() => ({
  opacity: 0.45,
  padding: '12px 24px',
  textAlign: 'center',
  fontSize: 12,
  order: 3,
  width: '100%',
  display: 'inline-flex',
  justifyContent: 'center',

  '@media screen and (min-width: 768px)': {
    order: 0,
    width: 'auto',
  },
}))
