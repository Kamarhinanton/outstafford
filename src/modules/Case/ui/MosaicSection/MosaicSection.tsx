import React, { FC } from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { MosaicDataType } from '@/utils/globalTypes'

import styles from './MosaicSection.module.scss'

type MosaicSectionType = {
  mosaicData: MosaicDataType
}

const MosaicSection: FC<MosaicSectionType> = ({ mosaicData }) => {
  return mosaicData ? (
    <section className={styles['mosaic']}>
      <Container>
        <div className={styles['mosaic__content']}>
          {mosaicData.description && (
            <div className={styles['top-description']}>
              {mosaicData.description?.title && (
                <h2
                  className={classNames('h2', styles['top-description__title'])}
                >
                  {mosaicData.description.title}
                </h2>
              )}
              <div className={styles['top-description__text']}>
                {mosaicData.description?.textTop && (
                  <p>{mosaicData.description.textTop}</p>
                )}
                {mosaicData.description?.quote && (
                  <div className={styles['quote']}>
                    <p className={styles['quote__top']}>
                      {mosaicData.description.quote.text}
                    </p>
                    <div className={styles['quote__bottom']}>
                      {mosaicData.description.quote.img && (
                        <BackgroundImage
                          src={mosaicData.description.quote.img}
                          alt={'author'}
                          position={'cover'}
                          className={styles['quote__bottom_img']}
                        />
                      )}
                      {mosaicData.description.quote.author && (
                        <div className={styles['quote__bottom_naming']}>
                          {mosaicData.description.quote.author && (
                            <p>{mosaicData.description.quote.author}</p>
                          )}
                          {mosaicData.description.quote.position && (
                            <p>
                              <span>
                                {mosaicData.description.quote.position}
                              </span>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {mosaicData.description?.textBottom && (
                  <p>{mosaicData.description.textBottom}</p>
                )}
              </div>
            </div>
          )}
          {mosaicData.mosaic && (
            <div
              className={classNames(
                styles['bottom-description'],
                !mosaicData.mosaic?.doubleImg ? styles['no-double'] : '',
              )}
            >
              {mosaicData.mosaic?.topImg && (
                <BackgroundImage
                  src={mosaicData.mosaic.topImg}
                  alt={'picture'}
                  className={styles['image']}
                  position={'cover'}
                />
              )}
              {mosaicData.mosaic?.doubleImg && (
                <div className={styles['double-images']}>
                  {mosaicData.mosaic?.doubleImg?.img1 && (
                    <BackgroundImage
                      src={mosaicData.mosaic.doubleImg.img1}
                      alt={'picture'}
                      className={styles['image']}
                      position={'cover'}
                    />
                  )}
                  {mosaicData.mosaic?.doubleImg?.img2 && (
                    <BackgroundImage
                      src={mosaicData.mosaic.doubleImg.img2}
                      alt={'picture'}
                      className={styles['image']}
                      position={'cover'}
                    />
                  )}
                </div>
              )}
              {mosaicData.mosaic?.bottomImg && (
                <BackgroundImage
                  src={mosaicData.mosaic.bottomImg}
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
