import React from 'react'
import { BiCaretRight, BiMenu, BiX } from 'react-icons/bi'
import { Poppable } from 'webrix/components'
import {
  useClickOutside,
  useDimensions,
  useVisibilityState,
} from 'webrix/hooks'
import styles from './style.module.scss'
import cls from 'classnames'

type MenuProps = React.PropsWithChildren<
  {
    reference?: DOMRect
    container?: React.RefObject<HTMLElement>
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>

type MenuItemProps = React.PropsWithChildren<
  {
    active?: boolean
    text: JSX.Element | string
    icon?: JSX.Element | null
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement>
>

const GAP = 5

export const Item = ({
  children,
  active,
  text,
  icon = null,
  ...rest
}: MenuItemProps) => {
  const { visible, show, hide } = useVisibilityState()
  const child = children && React.Children.only(children)
  const ref = React.createRef<HTMLDivElement>()
  return (
    <div
      {...rest}
      {...(!!child ? { onClick: show } : null)}
      ref={ref}
      className={cls(styles.menu__item, active ? styles.active_menu__item : '')}
    >
      {icon}
      {text}
      {child && <BiCaretRight />}
      {/* {visible && child && React.cloneElement<JSX.Element>(child, { reference: ref })} */}
    </div>
  )
}
// const Divider = () => <div className={cls(styles.divider)} />

const Leaf = ({ children, reference, container }: MenuProps) => {
  const menu = React.useRef()
  const { width, height } = useDimensions(menu)
  const ref = reference
    ? reference
    : new DOMRect(
        (window.innerWidth - width) / 2,
        (window.innerHeight - height) / 2,
        0,
        0
      )

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
type MenuButton = React.PropsWithChildren<
  {
    open: boolean
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLButtonElement
  >
>

const Button = React.forwardRef<HTMLButtonElement, MenuButton>((props, ref) => {
  const { children, open, ...rest } = props

  function Icon() {
    return open ? <BiX /> : <BiMenu />
  }

  const className = cls('floating__btn', styles.button)

  const $props = {
    ...rest,
    className,
    ref,
  }

  return (
    <button {...$props}>
      <Icon />
    </button>
  )
})
type PlacementFnType = (
  rbr: DOMRect,
  tbr: DOMRect
) => Array<{
  top: number
  left: number
}>
type PlacementTypes =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right'
  | 'center left'
  | 'center right'
type WrapperProps = React.PropsWithChildren<{
  placement?: {
    initial: number
    area: PlacementFnType
  }
  container?: React.RefObject<HTMLElement | HTMLDivElement>
  className?: string
}>
function Wrapper({ children, placement, className, container }: WrapperProps) {
  const [open, setOpen] = React.useState<boolean>(false)
  const btn_ref = React.createRef<HTMLButtonElement>()
  const reference = React.createRef<HTMLDivElement>()

  const initial_placement = placement?.initial ?? 0

  const placements = placement?.area
    ? placement.area
    : React.useCallback((rbr: DOMRect, tbr: DOMRect) => {
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

  const poppable_props = {
    default: initial_placement,
    placements,
    container,
    reference: btn_ref,
  }
  const { visible, show, hide } = useVisibilityState()
  const child = children && React.Children.only(children)
  const handleOnMouseDownCapture = useClickOutside(hide)

  return (
    <div ref={reference}>
      <Button open={visible} ref={btn_ref} onClick={visible ? hide : show} />

      <Poppable
        {...poppable_props}
        onMouseDownCapture={handleOnMouseDownCapture}
      >
        {visible && child && (
          <div
            className={cls(
              styles.container,
              'rounded-md',
              className
            )}
          >
            <div
              className={cls(
                styles.menu__title,
                'sticky font-bold text-lg top-0 z-[1] shadow-lg'
              )}
            >
              Menu
            </div>
            <div className={cls('p-4 z-[0]')}>{children}</div>
          </div>
        )}
      </Poppable>
    </div>
  )
}

export default Object.assign(Wrapper, { Leaf, Item, Button })
