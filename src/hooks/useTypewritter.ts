import { useEffect, useState } from 'react'

interface TypewriterProps {
  autostart?: boolean,
  interval?: number,
  delay?: number
  startsAt?: number
}

/** Returns an text that increases its size like a typewriter */
const useTypewriter = (text: string, props?: TypewriterProps) => {
  const autostart = props?.autostart ?? true
  const interval = props?.interval ?? 50
  const initialDelay = props?.delay ?? 0
  const startsAt = Math.min(props?.startsAt ?? 0, text.length)

  const [delay, setDelay] = useState(initialDelay)
  const [index, setIndex] = useState(startsAt)
  const [started, setStarted] = useState(autostart)

  useEffect(() => {
    if (started) {
      if (delay > 0) setTimeout(() => setDelay(0), delay)
      else {
        setTimeout(() => {
          const end = Math.min(index + 1, text.length)
          if (end <= text.length) setIndex(Math.min(index + 1))
          if (delay > 0) setDelay(0)
        }, interval)
      }
    }
  }, [index, interval, started, text, delay])

  const typewriterText = (): string => {
    return text.substring(0, index)
  }

  return { text: typewriterText(), setStarted }
}

export default useTypewriter
