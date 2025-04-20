import styled from 'styled-components'

export const StyledPictureHolder = styled.picture`
  position: absolute;
  right: 0;
  margin-right: 10px;
  top: 0;
  margin-top: -40px;
  width: 100px;
  height: 100px;
  max-height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  box-shadow: 0 0 70px -30px var(--primary);
  border-radius: 8px;
  padding: 8px 12px;
  border: 4px solid transparent;
  overflow: hidden;
  background: var(--bg-accent);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: inherit;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`

export const StyledTimelineCard = styled.div`
  position: relative;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-right: 15px;
  z-index: 4;
  user-select: none;
  position: relative;
  padding: 25px;
  color: var(--text-color);
  transition: var(--fade-in);
  border-radius: 8px;

  &:hover ${StyledPictureHolder} {
    border-color: var(--primary);
  }

  .description {
    color: inherit;
    line-height: 1.5;
    opacity: 0.75;
  }

  &:before {
    left: -20px;
    width: 20px;
    top: 30px;
    background-color: var(--bg-accent);
    height: 4px;
    content: '';
    font-size: 40px;
    position: absolute;
    transition: var(--fade-in);
    z-index: -1;
    border-radius: inherit;
  }
  &:after {
    border-radius: inherit;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: var(--bg-accent);
    background: linear-gradient(to right, var(--bg-accent), transparent);
    content: '';
    font-size: 40px;
    position: absolute;
    transition: background 0.5s ease-in-out;
    z-index: -1;
    // filter: blur(20%);
    // opacity: 0.35;
    mix-blend-mode: overlay;
  }
  .meta {
    // background: var(--bg);
    padding: 4px 0px;
    // margin-left: -30px;
    transition: var(--fade-in);
    // box-shadow: var(--beam-shadow);
    border-radius: 8px;
    z-index: 1;
    color: var(--text-color);
    opacity: 0.5;
  }

  &:hover {
    // transform: translate(0);
    box-shadow: var(--beam-shadow);
    &:after {
      animation-name: headShake;
      border: 4px solid var(--primary);
    }

    .meta {
      margin-left: 0;
      opacity: 1;
    }
    &:before {
      background-color: var(--primary);
    }
  }

  .work__org {
    font-style: normal;
    font-family: var(--display-font);
    font-size: 20px;
    line-height: 26px;
    opacity: var(--opacity);
    font-weight: 600;
    font-size: 20px;
    max-width: 85%;
    user-select: none;
  }
`

export const StyledTimelineStyled = styled.div(() => ({
  position: 'absolute',
  content: '',
  width: 2,
  height: '100%',
  left: 0,
  top: 0,
  background: 'var(--bg-accent)',
  zIndex: -1,
}))

export const HighlightListTogglerStyled = styled.button(() => ({
  color: 'var(--highlighted)',
  background: 'transparent',
  marginTop: 8,
  marginBottom: 8,
}))
export const HighlightListStyled = styled.ul(() => ({
  display: 'block',
}))
export const HighlightListItemStyled = styled.li(() => ({
  position: 'relative',
  display: 'block',
  paddingLeft: 20, // Space for the bullet
  lineHeight: 1.75,
  listStyle: 'none',
  listStyleType: 'none',
  opacity: 0.75,

  '&&::before': {
    content: '""',
    display: 'inline-block',
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: 'var(--text-color)',
    opacity: 0.5,
    position: 'absolute',
    left: 0, // Position the bullet
    top: 12,
  },
}))

export const TimelineYearStyled = styled.h3(() => ({
  fontSize: '2em',
  fontWeight: 800,
  lineHeight: 0.5,
  transition: 'var(--fade-in)',
  textTransform: 'uppercase',
  fontFamily: 'var(--display-font)',
  opacity: 0.2,
  userSelect: 'none',
  marginBottom: '0px',
  zIndex: 0,
  position: 'sticky',
  top: 0,
}))
