import styled from 'styled-components'

export const ArticleStyled = styled.article(() => ({
  width: '100%',
  flexGrow: 1,
  background: 'var(--bg-accent)',
  padding: 20,
  borderRadius: 12,
  transition: 'var(--fade-in)',

  '& .title': {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'var(--display-font)',
    marginBottom: 10,
    textTransform: 'capitalize',
    color: 'var(--text-color)',
    lineHeight: 1.5,
  },

  '& .description': {
    color: 'var(--text-color)',
    fontSize: 14,
    opacity: 0.5,
    display: 'block',
    marginTop: 8,
    lineHeight: 1.5,
    minHeight: 60,
  },

  img: {
    borderRadius: 16,
    width: '100%',
  },

  '&&:hover': {
    boxShadow: 'var(--beam-shadow),0px 0px 0px 2px var(--primary)',
    '--opacity': 1,
    transform: 'translate(2px, -2px)',
  },

  '.date': {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    opacity: .75,
    color: 'var(--text-color)',
    fontSize: '.75em',
  }
}))

// flex flex-col items-center justify-end w-full h-full
export const LoaderBoxStyled = styled.div(() => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
}))

export const GridListStyled = styled('ul')(() => ({
  display: 'grid',
  gap: 12,

  '@media (min-width: 768px)': {
    gridTemplateColumns: `repeat(auto-fill, minmax(${100 / 2.5}%, 1fr))`,
  },
}))

export const GridListItemStyled = styled('ul')(() => ({}))
