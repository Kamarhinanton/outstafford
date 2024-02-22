import { FC } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'

import styles from './BackgroundImage.module.scss'

type BackgroundImageProps = {
  className?: string
  position?: 'cover' | 'contain'
} & ImageProps

export const BackgroundImage: FC<BackgroundImageProps> = ({
  src,
  alt,
  quality = 75,
  className,
  position = 'contain',
  ...props
}) => {
  return (
    <div className={classNames(styles['background-image'], className)}>
      <Image
        className={classNames(
          position === 'cover' ? styles['cowerStyle'] : '',
          position === 'contain' ? styles['containStyle'] : '',
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
