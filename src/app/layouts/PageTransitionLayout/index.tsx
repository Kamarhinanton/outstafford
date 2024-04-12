import React, { FC, ReactNode } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import dynamic from 'next/dynamic'

const Preview = dynamic(() => import('@/components/PagePreview/PagePreview'))

type PageTransitionLayoutTypes = {
  children: ReactNode
  title: string
  description: string
}

const variants = {
  exit: {
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
  initial: {
    opacity: 0,
  },
}

const PageTransitionLayout: FC<PageTransitionLayoutTypes> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <>
        <Preview title={title} description={description} />
      </>
      <LazyMotion features={domAnimation}>
        <m.div {...variants}>{children}</m.div>
      </LazyMotion>
    </>
  )
}

export default PageTransitionLayout
