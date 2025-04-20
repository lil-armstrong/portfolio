import styled from 'styled-components'

export const StyledPictureHolder = styled.div`
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
  /* border: 2px solid var(--primary); */
  box-shadow: 0 0 70px -30px var(--primary);
  border-radius: 8px;
  padding: 8px 12px;
  border: 4px solid transparent;

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`

export const StyledTimelineCard = styled.div`
  position: relative;
  margin-bottom: 60px;

  &:hover ${StyledPictureHolder} {
    border-color: var(--primary);
    background: #fff;
  }
`
