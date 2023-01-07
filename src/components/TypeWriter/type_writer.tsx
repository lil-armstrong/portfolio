import $TypeWriter from 'typewriter-effect/dist/core'
import React from 'react'

type Props = React.PropsWithChildren<{
  text: (string | string[])[]
  speed?: number
  repeat?: boolean
  loop?: boolean
}>
function TypeWriter({ speed = 500, text, loop }: Props) {
  const [char, set] = React.useState<string>('')
  const ref = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    if (ref.current) {
      let typewriter = new $TypeWriter(ref.current, {
        loop,
        delay: 100,
      })
      text.forEach((value, index) => {
        typewriter.pauseFor(speed)

        if (Array.isArray(value)) {
          value.forEach((v, idx) => {
            typewriter.typeString(v).pauseFor(speed)
            // get last index of space
            const lspace = v.lastIndexOf(' ')
            if (lspace != -1) {
              if (idx < v.length - 1) {
                typewriter.deleteChars(v.substring(lspace + 1).length)
              }
            } else {
              typewriter.deleteAll()
            }

            typewriter.pause(speed / 2)
          })
        } else typewriter.typeString(value).pauseFor(1000).deleteAll()

        if (!loop && index >= text.length - 1) {
          typewriter.stop()
        } else {
          typewriter.deleteAll().pause(500)
        }

        typewriter.pauseFor(1000).start()
      })
    }
  }, [])

  return <div ref={ref}></div>
}

export default TypeWriter
