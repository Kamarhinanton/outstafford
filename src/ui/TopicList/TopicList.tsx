import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './TopicList.module.scss'

type TopicListType = {
  className?: string
  list: string[]
}

const TopicList: FC<TopicListType> = ({ list, className }) => {
  return (
    <ul className={classNames(styles['topic-list'], className)}>
      {list.map((item) => (
        <li key={item} className={styles['topic-list__link']}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TopicList
