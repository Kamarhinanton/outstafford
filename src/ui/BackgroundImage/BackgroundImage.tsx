import { FC } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'

import styles from './BackgroundImage.module.scss'

type BackgroundImageProps = {
  className?: string
  cover?: boolean
  contain?: boolean
} & ImageProps

export const BackgroundImage: FC<BackgroundImageProps> = ({
  src,
  alt,
  quality = 75,
  className,
  cover = false,
  contain = true,
  ...props
}) => {
  return (
    <div className={classNames(styles['background-image'], className)}>
      <Image
        className={classNames(
          cover ? styles['cowerStyle'] : '',
          contain ? styles['containStyle'] : '',
        )}
        src={src}
        fill={true}
        alt={alt}
        sizes="100%"
        quality={quality}
        {...props}
      />
    </div>
  )
}
