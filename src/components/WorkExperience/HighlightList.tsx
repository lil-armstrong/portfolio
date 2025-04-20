import { useState } from 'react'
import { IHighlightListProps } from './IProps'
import {
  HighlightListItemStyled,
  HighlightListStyled,
  HighlightListTogglerStyled,
} from './styled'

const HighlightList = ({ highlights }: IHighlightListProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleVisibilityToggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      {highlights.length ? (
        <HighlightListTogglerStyled
          type="button"
          onClick={handleVisibilityToggle}
        >
          {isVisible ? 'Hide highlights' : 'See highlights'}
        </HighlightListTogglerStyled>
      ) : null}

      {isVisible ? (
        <HighlightListStyled>
          {highlights.map((highlight, idx) => (
            <HighlightListItemStyled key={`highlight_${idx}`}>
              {highlight}
            </HighlightListItemStyled>
          ))}
        </HighlightListStyled>
      ) : null}
    </>
  )
}
export default HighlightList
