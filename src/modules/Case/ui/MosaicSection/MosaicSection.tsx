import React, { FC } from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { ProjectMosaicType } from '../../../../../pages/projects/[slug]'

import styles from './MosaicSection.module.scss'

type MosaicSectionType = {
  mosaic: ProjectMosaicType
}

const MosaicSection: FC<MosaicSectionType> = ({ mosaic }) => {
  return mosaic ? (
    <section className={styles['mosaic']}>
      <Container>
        <div className={styles['mosaic__content']}>
          {(mosaic.title ||
            mosaic.textTop ||
            mosaic.quote ||
            mosaic.textBottom) && (
            <div className={styles['top-description']}>
              {mosaic.title && (
                <h2
                  className={classNames('h2', styles['top-description__title'])}
                >
                  {mosaic.title}
                </h2>
              )}
              <div className={styles['top-description__text']}>
                {mosaic.textTop && <p>{mosaic.textTop}</p>}
                {mosaic.quote && (
                  <div className={styles['quote']}>
                    <p className={styles['quote__top']}>{mosaic.quote.text}</p>
                    <div className={styles['quote__bottom']}>
                      {mosaic.quote.img?.data && (
                        <BackgroundImage
                          src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${mosaic.quote.img.data.attributes.url}`}
                          alt={'author'}
                          position={'cover'}
                          className={styles['quote__bottom_img']}
                        />
                      )}
                      <div className={styles['quote__bottom_naming']}>
                        <p>{mosaic.quote.author}</p>
                        <p>
                          <span>{mosaic.quote.position}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {mosaic.textBottom && <p>{mosaic.textBottom}</p>}
              </div>
            </div>
          )}
          {(mosaic.doubleImg ||
            mosaic.topImg?.data ||
            mosaic.bottomImg?.data) && (
            <div
              className={classNames(
                styles['bottom-description'],
                !mosaic.doubleImg ? styles['no-double'] : '',
              )}
            >
              {mosaic.topImg?.data && (
                <BackgroundImage
                  src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${mosaic.topImg.data.attributes.url}`}
                  alt={'picture'}
                  className={styles['image']}
                  position={'cover'}
                />
              )}
              {mosaic.doubleImg && (
                <div className={styles['double-images']}>
                  <BackgroundImage
                    src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${mosaic.doubleImg.img1.data.attributes.url}`}
                    alt={'picture'}
                    className={styles['image']}
                    position={'cover'}
                  />
                  <BackgroundImage
                    src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${mosaic.doubleImg.img2.data.attributes.url}`}
                    alt={'picture'}
                    className={styles['image']}
                    position={'cover'}
                  />
                </div>
              )}
              {mosaic.bottomImg?.data && (
                <BackgroundImage
                  src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${mosaic.bottomImg.data.attributes.url}`}
                  alt={'picture'}
                  className={classNames(styles['image'], styles['mob'])}
                  position={'cover'}
                />
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  ) : null
}

export default MosaicSection
