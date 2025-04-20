import { PropsWithChildren } from 'react'

export interface IPropInterface extends PropsWithChildren {
  mainTitle: React.ReactElement | string
  subTitle: React.ReactElement | string
  contactLinks: (JSX.Element | string)[]
  id: string
}
