export type TypeMeta = 'ripple' | 'roller'

export interface IStyledProp {
  /**
   * Width of loader
   */
  w?: number
  /**
   * Height of the loader
   */
  h?: number
}

export interface IProps extends IStyledProp {
  type?: TypeMeta
}
