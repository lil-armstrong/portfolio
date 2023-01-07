import { typeWriter } from '@/helper'
import React from 'react'
type Props = React.PropsWithChildren<{
  text: string
  speed?: number
  repeat?: boolean
}>
function TypeWriter({ speed = 500, text }: Props) {
  const [char, set] = React.useState<string>('')

  let typer = typeWriter({
    target: (c: string) => {
      set((prev) => prev + c)
    },
    text,
    speed,
  })

  React.useEffect(() => {
    typer.beginTyping()
    return () => {}
  }, [])

  return <>{char}</>
}

export default TypeWriter
