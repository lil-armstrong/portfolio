import React from 'react'
import TypeWriter from 'typewriter-effect/dist/core'

type Props = React.PropsWithChildren<{
  text: (string | string[])[]
  speed?: number
  repeat?: boolean
  loop?: boolean
}>
function TextTypingEffect({ speed = 500, text, loop }: Props) {
  const ref = React.createRef<HTMLDivElement>()
  const renderText = (text: string) => text.replaceAll('_', ' ')
  React.useEffect(() => {
    if (ref.current) {
      const typewriter = new TypeWriter(ref.current, {
        loop,
        delay: 100,
      })

      text.forEach((value, index) => {
        typewriter.pauseFor(speed)

        if (Array.isArray(value)) {
          value.forEach((v, idx) => {
            typewriter.typeString(renderText(v)).pauseFor(speed)
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
        } else
          typewriter.typeString(renderText(value)).pauseFor(1000).deleteAll()

        if (!loop && index >= text.length - 1) {
          typewriter.stop()
        } else {
          typewriter.deleteAll().pause(500)
        }

        typewriter.pauseFor(1000).start()
      })
    }
  }, [])

  return <code ref={ref}></code>
}

export default TextTypingEffect
