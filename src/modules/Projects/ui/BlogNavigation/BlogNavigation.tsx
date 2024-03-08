import React, { FC } from 'react'
import { BlogSectionType } from '@/modules/Projects/ui/ProjectsContent'
import classNames from 'classnames'

import styles from './BlogNavigation.module.scss'

const categories = ['Mobile', 'Web', 'AI']

const BlogNavigation: FC<BlogSectionType> = ({
  handleClick,
  activeCategory,
  isAll,
  handleAll,
}) => {
  return (
    <div className={styles['blog-navigation']}>
      <ul className={styles['blog-navigation__list']}>
        <li
          onClick={handleAll}
          key={'All'}
          className={classNames(styles['item'], {
            [styles['active']]: isAll,
          })}
        >
          <p className={styles['item__text']}>All</p>
        </li>
        {categories.map((category) => (
          <li
            onClick={() => handleClick(category)}
            key={category}
            className={classNames(styles['item'], {
              [styles['active']]: activeCategory.includes(category),
            })}
          >
            <p className={styles['item__text']}>{category}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogNavigation
