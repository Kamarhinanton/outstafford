import React, { FC, ReactNode } from 'react'
import PagePreview from '@/components/PagePreview/PagePreview'
import { motion } from 'framer-motion'

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
        <PagePreview title={title} description={description} />
      </>
      <motion.div {...variants}>{children}</motion.div>
    </>
  )
}

export default PageTransitionLayout
