export async function resolveAsset(
  url: string | undefined,
  async: boolean = true
) {
  try {
    if (!url) {
      throw new Error('URL is undefined!')
    }

    if (async) {
      return await import(/* @vite-ignore */ url).then((item) => {
        return item.default
      })
    }
    /* @ts-ignore */
    return require(/* @vite-ignore */ url)
  } catch (error: any) {
    console.error(error?.message)
    return 'https://via.placeholder.com/60'
  }
}
type TypeTextProps = {
  text: string
  target: (char: string) => void
  speed?: number
  repeat?: boolean
}

export function typeWriter(config: TypeTextProps) {
  let i = 0

  if (!config.text) throw new Error('Missing `text` prop')

  config = {
    ...config,
    speed: config.speed || 500,
    target: config.target || console.log,
  }

  function beginTyping() {
    const { text, target, speed } = config
    if (i < text.length) {
      target(text.charAt(i++))
      setTimeout(beginTyping, speed)
    }
  }

  return {
    beginTyping,
  }
}

// const a = typeWriter({text: "Hello World", target: console.log}).beginTyping();

export function isUpDisabled(scroll_height?: number) {
  scroll_height = Math.abs(
    scroll_height ? scroll_height : document.documentElement.scrollTop
  )
  return !Boolean(scroll_height)
}

export function isDownDisabled(scroll_height?: number) {
  scroll_height = Math.abs(
    scroll_height ? scroll_height : document.documentElement.scrollTop
  )
  const max_y = document.documentElement.scrollHeight
  console.log({ max_y, scroll_height })
  return scroll_height === max_y
}
