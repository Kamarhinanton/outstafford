import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { ProjectSummary } from '@/utils/globalTypes'

import styles from './SummaryCase.module.scss'

type SummaryCaseType = {
  summary: ProjectSummary
}

const SummaryCase = ({ summary }: SummaryCaseType) => {
  return (
    <section className={styles['summary']}>
      <Container>
        {summary.title && (
          <h2 className={classNames('h2', styles['summary__title'])}>
            {summary.title}
          </h2>
        )}
        <ul className={styles['summary__content']}>
          {summary.list?.map((item) => (
            <li className={styles['summary__content_item']} key={item.title}>
              <h3 className={classNames(styles['title'], 'h3')}>
                {item.title}
              </h3>
              <p className={styles['description']}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default SummaryCase
