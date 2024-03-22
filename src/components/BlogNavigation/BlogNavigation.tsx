import React, { FC } from 'react'
import classNames from 'classnames'
import { BlogSectionType } from '@/utils/globalTypes'

import styles from './BlogNavigation.module.scss'

const BlogNavigation: FC<BlogSectionType> = ({
  handleClick,
  activeCategory,
  isAll,
  handleAll,
  categories,
  smallTopic,
}) => {
  return (
    <div id={'topBlog'} className={styles['blog-navigation']}>
      <ul
        className={classNames(styles['blog-navigation__list'], {
          [styles['small']]: smallTopic,
        })}
      >
        <li
          onClick={handleAll}
          key={'All'}
          className={classNames(styles['item'], {
            [styles['active']]: isAll,
          })}
        >
          <p className={styles['item__text']}>All</p>
        </li>
        {categories &&
          categories.map((category) => (
            <li
              onClick={() => handleClick && handleClick(category)}
              key={category}
              className={classNames(styles['item'], {
                [styles['active']]:
                  activeCategory && activeCategory.includes(category),
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
