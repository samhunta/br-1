import { useEffect, useState, useRef } from 'react'
import throttle from 'lodash/throttle'

const getScrollY = () => window.pageYOffset || window.scrollY

export const useScrollPosition = (throttleMs = 100): number => {
  const [scrollY, setScrollY] = useState(0)
  const listener = useRef<Function>()

  useEffect(() => {
    listener.current = throttle(() => {
      setScrollY(getScrollY())
    }, throttleMs)

    listener.current()
  }, [throttleMs])

  useEffect(() => {
    const cb = listener.current

    if (cb) {
      window.addEventListener('scroll', cb as never, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      window.removeEventListener('scroll', cb as never)
    }
  }, [])

  return scrollY
}
