import { useMemo } from 'react'
import { IProps } from './IProps'
import { LoaderStyled } from './styled'

export const Loader = (props: IProps) => {
  const divs = useMemo(() => {
    switch (props?.type) {
      case 'ripple': {
        return Array(2).fill(null) as null[]
      }
      case 'roller':{
        return Array(8).fill(null)  as null[]
      }
      default: {
        return []
      }
    }
  }, [props?.type])

  return (
    <LoaderStyled {...props}>
      {divs.map((_, index) => (
        <div key={index}></div>
      ))}
    </LoaderStyled>
  )
}
