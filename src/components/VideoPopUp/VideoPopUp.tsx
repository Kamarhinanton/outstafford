import React, { FC, useRef } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { motion } from 'framer-motion'

import styles from './VideoPopUp.module.scss'

const popUpVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
}

type VideoPopUpType = {
  videoId: string
  setIsPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const VideoPopUp: FC<VideoPopUpType> = ({ videoId, setIsPopUpVisible }) => {
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const youtubeRef = useRef<YouTube>(null)
  const pauseVideo = () => {
    if (youtubeRef.current) {
      youtubeRef.current.internalPlayer.pauseVideo()
      setIsPopUpVisible(false)
    }
  }

  return (
    <motion.div {...popUpVariant} className={styles['video-pop-up']}>
      <div className={styles['video-pop-up__content']}>
        <div onClick={pauseVideo} className={styles['cross']}>
          <span></span>
          <span></span>
        </div>
        <YouTube
          ref={youtubeRef}
          className={styles['video-pop-up__content_iframe']}
          videoId={videoId}
          opts={opts}
        />
      </div>
    </motion.div>
  )
}

export default VideoPopUp
