import React, { FC, useEffect, useRef } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import CloseCross from '@/ui/CloseCross/CloseCross'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { setIsPopUpActive } from '@/store/reducers/callPopUpSlice'

import styles from './VideoPopUp.module.scss'
export const popUpVariant = {
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
  const dispatch: AppDispatch = useDispatch()

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
      document.body.style.overflow = ''
    }
  }

  useEffect(() => {
    dispatch(setIsPopUpActive(true))
    return () => {
      dispatch(setIsPopUpActive(false))
    }
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <m.div {...popUpVariant} className={styles['video-pop-up']}>
        <div className={styles['video-pop-up__content']}>
          <CloseCross callBackFunc={pauseVideo} className={styles['cross']} />
          <YouTube
            ref={youtubeRef}
            className={styles['video-pop-up__content_iframe']}
            videoId={videoId}
            opts={opts}
          />
        </div>
      </m.div>
    </LazyMotion>
  )
}

export default VideoPopUp
