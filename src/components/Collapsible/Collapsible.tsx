import React, {
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  forwardRef,
} from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { ActionButtonStyled, WrapperStyled } from './styled'

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {}

const Collapsible: ForwardRefExoticComponent<
  CollapsibleProps & RefAttributes<HTMLDivElement>
> = forwardRef(({ children, ...props }: CollapsibleProps, ref) => {
  const [hidden, setHidden] = React.useState(false)
  const iconSize = 18
  function handleToggle() {
    setHidden(!hidden)
  }
  return (
    <div ref={ref} {...props}>
      <ActionButtonStyled
        data-cy="action-button"
        onClick={handleToggle}
        className="floating__btn"
        title={`
        ${hidden ? 'Open' : 'Close'}
        menu   
        `}
      >
        {hidden ? (
          <AiOutlineCaretRight size={iconSize} />
        ) : (
          <AiOutlineCaretLeft size={iconSize} />
        )}
      </ActionButtonStyled>
      <WrapperStyled isHidden={hidden} data-cy="childrenWrapper"  id="fixed__nav__btn">
        {children}
      </WrapperStyled>
    </div>
  )
})
export default Collapsible
