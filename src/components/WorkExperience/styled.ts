import styled from 'styled-components'

export const StyledPictureHolder = styled.picture`
  position: relative;
  right: 0;
  top: 0;
  margin-top: -40px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  box-shadow: 0 0 70px -30px var(--primary), var(--beam-shadow);
  border-radius: 8px;
  padding: 8px 12px;
  border: 3px solid transparent;
  overflow: hidden;
  background: var(--bg);


  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: inherit;
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
    font-weight: 400;
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
    display: flex;
  }

  &:hover {
    box-shadow: var(--beam-shadow);
    // transform: translate(0);
    &:after {
      animation-name: headShake;
      border: 3px solid var(--primary);
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
    user-select: none;
  }

  .work_date {
    font-size: 0.75em;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: -8px;
    opacity: 0.5;
    line-height: 1;
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
  opacity: 0.65,
  fontSize: '0.95em',

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

export const TitleContentStyled = styled.div(() => ({
  display: 'flex',
  gap: 12,
  marginBottom: 12,
}))
