export type MenuButton = React.PropsWithChildren<
  {
    open: boolean
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLButtonElement
  >
>

export type MenuProps = React.PropsWithChildren<
  {
    reference?: DOMRect
    container?: React.RefObject<HTMLElement>
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>

export type MenuItemProps = React.PropsWithChildren<
  {
    active?: boolean
    text: JSX.Element | string | null
    icon?: JSX.Element | null
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement>
>

export type PlacementFnType = (
  rbr: DOMRect,
  tbr: DOMRect
) => Array<{
  top: number
  left: number
}>

export type WrapperProps = React.PropsWithChildren<{
  placement?: {
    initial: number
    area: PlacementFnType
  }
  container?: React.RefObject<HTMLElement | HTMLDivElement>
  className?: string
}>
