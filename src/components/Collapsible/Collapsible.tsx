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
    <div
      role="presentation"
      title={`
    ${hidden ? 'Open' : 'Close'}
     menu   
    `}
      ref={ref}
      {...props}
    >
      <ActionButtonStyled
        data-cy="action-button"
        onClick={handleToggle}
        className="floating__btn"
      >
        {hidden ? (
          <AiOutlineCaretRight size={iconSize} />
        ) : (
          <AiOutlineCaretLeft size={iconSize} />
        )}
      </ActionButtonStyled>
      <WrapperStyled id="fixed__nav__btn">{!hidden && children}</WrapperStyled>
    </div>
  )
})
export default Collapsible
