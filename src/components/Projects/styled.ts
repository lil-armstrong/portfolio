import styled from 'styled-components'

// min-w-[300px] max-w-[100%] lg:max-w-[${100 / 3}px] flex-grow
export const ProjectCardStyled = styled('div')(() => ({
  flexGrow: 1,
  position: 'relative',

  '.roles': {
    display: 'flex',
    gap: 4,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 8
  },

  '& .meta': {
    fontSize: 10,
    userSelect: 'none',
    textTransform: 'capitalize',
    'li:not(:last-of-type):after': {
      content: `\u2022`,
      marginLeft: 8,
    },
  },
  '& .description': {
    position: 'relative',
    fontSize: 12,
    userSelect: 'none',
    margin: '8px 0',
    marginLeft: 8,
    color: 'var(--text-color)',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    maxWidth: '100%',
  },
}))

export const ProjectItemLink = styled('a')(() => ({
  position: 'absolute',
  right: 30,
  top: 10,
}))

export const PictureStyled = styled('picture')(() => ({
  overflow: 'hidden',
  display: 'block',
  width: 50,
  height: 50,
  marginBottom: 8,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}))
