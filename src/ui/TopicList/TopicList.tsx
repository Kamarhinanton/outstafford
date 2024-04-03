import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './TopicList.module.scss'

type TopicListType = {
  className?: string
  dots?: boolean
  list: string[]
  variants?: 'small' | 'large' | 'x-large'
  color?: 'green' | 'grey' | 'transparent'
}

const TopicList: FC<TopicListType> = ({
  list,
  className,
  dots = false,
  variants = 'large',
  color = 'green',
}) => {
  return (
    <ul
      className={classNames(
        styles['topic-list'],
        className,
        {
          [styles['dots']]: dots,
        },
        styles[variants],
        styles[color],
      )}
    >
      {list.map((item) => (
        <li key={item} className={styles['topic-list__link']}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TopicList
