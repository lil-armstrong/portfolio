import styled from 'styled-components'

// flex mt-[20px] flex-row-reverse mb-[70px] flex-wrap justify-evenly w-full items-center gap-[30px]
export const ActionBoxStyled = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  alignContent: 'center',
  width: '100%',
  marginTop: 20,
  marginBottom: 70,
  gap: 30,
  alignItems: 'center',
}))

export const ParagraphStyled = styled('p')(() => ({
  color: 'var(--text-color)',
  fontSize: 16,
  lineHeight: 1.5,
}))

export const BoldTextStyled = styled('strong')(() => ({
  color: 'var(--highlighted)',
  fontWeight: 'bold',
  fontSize: 'inherit',
}))

export const TitleTextStyled = styled('h1')(() => ({
  color: 'var(--text-color)',
  fontWeight: 'bold',
  fontSize: '25px',
  fontFamily: 'var(--display-font)',
}))
export const Heading2TextStyled = styled('h2')(() => ({
  fontWeight: 'bold',
  fontSize: '20px',
}))
export const Heading3TextStyled = styled('h2')(() => ({
  fontWeight: 'bold',
  fontSize: '18px',
  textTransform: 'capitalize',
  textDecoration: 'underline',
}))

export const UnorderedListStyled = styled('ul')(() => ({}))
export const UnorderedListItemStyled = styled('li')(() => ({
  paddingLeft: 20,
  textIndent: '-20px',
  lineHeight: 1.5,

  '&&::before': {
    content: '""',
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: 'var(--highlighted)',
    marginRight: 8,
    marginLeft: 4,
    marginTop: 4,
  }
}))
