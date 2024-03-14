import React, { FC } from 'react'
import { motion, MotionValue } from 'framer-motion'

import styles from './SectionCursor.module.scss'

type SectionCursorType = {
  xPosition: MotionValue
  yPosition: MotionValue
}

const SectionCursor: FC<SectionCursorType> = ({ xPosition, yPosition }) => {
  return (
    <div className={styles['cursor']}>
      <motion.div
        className={styles['cursor__shadow']}
        style={{
          x: xPosition,
          y: yPosition,
        }}
      />
    </div>
  )
}

export default SectionCursor
