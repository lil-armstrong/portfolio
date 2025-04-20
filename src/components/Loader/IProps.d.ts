
export type TypeMeta = 'ripple' | 'roller'

export type StyledProp = {
  /**
   * Width of loader
   */
  w?: number
  /**
   * Height of the loader
   */
  h?: number
}

export interface IProps extends StyledProp {
  type?: TypeMeta,
}
