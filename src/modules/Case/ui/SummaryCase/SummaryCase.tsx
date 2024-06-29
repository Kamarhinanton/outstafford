import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { SummaryProjectType } from '../../../../../pages/projects/[slug]'

import styles from './SummaryCase.module.scss'

type SummaryCaseType = {
  summary: SummaryProjectType
}

const SummaryCase = ({ summary }: SummaryCaseType) => {
  return summary ? (
    <section className={styles['summary']}>
      <Container>
        {summary.title && (
          <h2 className={classNames('h2', styles['summary__title'])}>
            {summary.title}
          </h2>
        )}
        <ul className={styles['summary__content']}>
          {summary.list?.map((item, i) => (
            <li className={styles['summary__content_item']} key={item.id}>
              {i === 0 && item.picture && (
                <BackgroundImage
                  src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${item.picture.data.attributes.url}`}
                  alt={'picture'}
                  className={styles['image']}
                  position={'contain'}
                />
              )}
              <div className={styles['text']}>
                {item.title && (
                  <h3 className={classNames(styles['text__title'], 'h3')}>
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className={styles['text__description']}>
                    {item.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  ) : null
}

export default SummaryCase
