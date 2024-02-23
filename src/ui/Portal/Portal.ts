import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
  selector: string
}

export const Portal: FC<PortalProps> = ({ children, selector }) => {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    console.log(selector)
    ref.current = document.getElementById(selector)
    setMounted(true)

    return () => setMounted(false)
  }, [selector])

  if (!mounted || !ref.current) return null

  return createPortal(children, ref.current)
}
