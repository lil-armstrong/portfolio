import cls from 'classnames'
import React from 'react'
import { BiCaretRight, BiMenu, BiX } from 'react-icons/bi'
import { Poppable } from 'webrix/components'
import {
  useClickOutside,
  useDimensions,
  useVisibilityState,
} from 'webrix/hooks'
import {
  MenuButton,
  MenuItemProps,
  MenuProps,
  PlacementFnType,
  WrapperProps,
} from './IProps'
import styles from './style.module.scss'
import {
  NonSelectablePopupWrapper,
  PoppableChildrenWrapperStyled,
} from './styled'

const GAP = 5

export const Item = ({
  children,
  active,
  text,
  icon = null,
  ...rest
}: MenuItemProps) => {
  const { show } = useVisibilityState()
  const child = children && React.Children.only(children)
  const ref = React.createRef<HTMLDivElement>()
  return (
    <div
      ref={ref}
      {...rest}
      {...(!!child ? { onClick: show } : null)}
      className={cls(styles.menu__item, active ? styles.active_menu__item : '')}
    >
      {icon}
      {text}
      {child && <BiCaretRight />}
    </div>
  )
}

/**
 * The `Leaf` component wraps `Poppable` to position its children dynamically
 * relative to a reference or default centered position.
 *
 * @param {MenuProps} props - Component properties.
 * @param {React.ReactNode} props.children - Content inside the `Poppable`.
 * @param {DOMRect | undefined} props.reference - Reference element or bounding rectangle.
 * @param {HTMLElement | undefined} props.container - Container for the `Poppable`.
 *
 * @returns {JSX.Element} A `div` with positioned `Poppable` content.
 */
function Leaf({ children, reference, container }: MenuProps): JSX.Element {
  const menu = React.useRef()
  useDimensions(menu)

  const placements: PlacementFnType = React.useCallback((rbr, tbr) => {
    const { vbefore, vcenter, vafter, hbefore, hcenter, hafter } =
      Poppable.Placements
    return [
      { ...vbefore(rbr, tbr, -GAP), ...hbefore(rbr, tbr, -GAP) }, // Top left
      { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr) }, // Top center
      { ...vbefore(rbr, tbr, -GAP), ...hafter(rbr, tbr, GAP) }, // Top right
      { ...vafter(rbr, tbr, GAP), ...hbefore(rbr, tbr, -GAP) }, // Bottom left
      { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr) }, // Bottom center
      { ...vafter(rbr, tbr, GAP), ...hafter(rbr, tbr, GAP) }, // Bottom left
      { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP) }, // Center left
      { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP) }, // Center right
    ]
  }, [])

  const props = {
    reference,
    placements,
    className: 'poppable-target',
    container,
    ref: menu,
  }

  return (
    <div className={`${styles.container}`}>
      <Poppable {...props}>{children}</Poppable>
    </div>
  )
}

const Button = React.forwardRef<HTMLButtonElement, MenuButton>(
  ({ isOpen, ...rest }, ref) => {
    const iconSize = 18

    /**
     * A functional component that renders an icon based on the `open` state.
     * If `open` is true, it displays a close (X) icon with an accessible label "Close menu".
     * Otherwise, it displays a menu icon with an accessible label "Open menu".
     *
     * @returns {JSX.Element} The appropriate icon component based on the `open` state.
     */
    const Icon = (): React.ReactElement =>
      isOpen ? (
        <BiX size={iconSize} aria-label="Close menu" />
      ) : (
        <BiMenu size={iconSize} aria-label="Open menu" />
      )

    const className = cls(styles.button)

    return (
      <button
        {...{
          ...rest,
          className,
          ref,
        }}
      >
        <Icon />
      </button>
    )
  }
)

function Wrapper({ children, className }: WrapperProps) {
  const btnRef = React.createRef<HTMLButtonElement>()
  const reference = React.createRef<HTMLDivElement>()

  const { visible, show, hide } = useVisibilityState()
  const child = children && React.Children.only(children)
  const handleOnMouseDownCapture = useClickOutside(hide)

  return (
    <div
      role="menu"
      ref={reference}
      onMouseDownCapture={handleOnMouseDownCapture}
    >
      <Button
        aria-label={`${visible ? 'Close' : 'Open'} the menu`}
        isOpen={visible}
        ref={btnRef}
        onClick={visible ? hide : show}
      />

      {visible && child && (
        <NonSelectablePopupWrapper
          role="presentation"
          className={cls(styles.container, className)}
        >
          <PoppableChildrenWrapperStyled>
            {React.Children.only(children)}
          </PoppableChildrenWrapperStyled>
        </NonSelectablePopupWrapper>
      )}
    </div>
  )
}

export default Object.assign(Wrapper, { Leaf, Item, Button })
