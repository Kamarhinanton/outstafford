import React from 'react'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import { CareersType } from '../../../../../pages/careers'

import styles from './Positions.module.scss'
import TopicList from '@/ui/TopicList/TopicList'

const Positions = ({ careers }: CareersType) => {
  return (
    <section className={styles['positions']}>
      <Container>
        <ul className={styles['positions__list']}>
          {careers.map(({ slug, frontMatter }) => (
            <li className={styles['link']} key={slug}>
              <div className={styles['link__description']}>
                <h2 className={classNames('h2', styles['title'])}>
                  {frontMatter.title}
                </h2>
                {frontMatter.topics && (
                  <TopicList
                    list={frontMatter.topics}
                    color={'grey'}
                    variants={'x-large'}
                    className={styles['topics']}
                  />
                )}
              </div>
              <ButtonPrimary
                href={`/careers/${slug}`}
                arrows={true}
                variant={'green'}
              >
                Open
              </ButtonPrimary>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Positions
