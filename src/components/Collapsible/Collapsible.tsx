import React, {
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  forwardRef,
} from 'react'
import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi'
import { ActionButtonStyled, WrapperStyled } from './styled'

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean
}

const Collapsible: ForwardRefExoticComponent<
  CollapsibleProps & RefAttributes<HTMLDivElement>
> = forwardRef(({ children, ...props }: CollapsibleProps, ref) => {
  const [isExpanded, setIsExpanded] = React.useState(props.isExpanded || false)
  const iconSize = 22

  function handleToggle() {
    setIsExpanded(!isExpanded)
  }

  return (
    <div ref={ref} {...props}>
      <WrapperStyled $isExpanded={isExpanded} data-cy="childrenWrapper">
        {children}
      </WrapperStyled>

      <ActionButtonStyled
        data-cy="action-button"
        onClick={handleToggle}
        className="floating__btn"
        title={`
        ${isExpanded ? 'Open' : 'Close'}
        menu
        `}
      >
        {isExpanded ? (
          <BiMenuAltRight size={iconSize} />
        ) : (
          <BiMenuAltLeft size={iconSize} />
        )}
      </ActionButtonStyled>
    </div>
  )
})

export default Collapsible
