import React from 'react'
import ReactLenis from '@studio-freight/react-lenis'

const SmoothScroll = () => {
  const options = {
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: true,
  }
  return <ReactLenis root options={{ ...options }} />
}

export default SmoothScroll
