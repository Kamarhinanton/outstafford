import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

import styles from './TeamCase.module.scss'

const teamCaseData = {
  title: 'Team',
  data: [
    {
      position: 'Designers',
      name: ['Artem Larin'],
    },
    {
      position: 'Managers',
      name: ['Max Onishenko', 'Artem Larin'],
    },
    {
      position: 'Developers',
      name: ['Evgen Pylypenko', 'Yulia Vlasenko'],
    },
  ],
}
const TeamCase = () => {
  return (
    <section className={styles['team-case']}>
      <Container>
        <div className={styles['team-case__content']}>
          <h2 className={classNames('h2', styles['title'])}>
            {teamCaseData.title}
          </h2>
          <ul className={styles['list']}>
            {teamCaseData.data.map((item) => (
              <li key={item.position} className={styles['list__item']}>
                <p>
                  <span>{item.position}</span>
                </p>
                <ul>
                  {item.name.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default TeamCase
