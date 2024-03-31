import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { ProjectTeam } from '@/utils/globalTypes'

import styles from './TeamCase.module.scss'

type TeamCaseType = {
  team: ProjectTeam
}
const TeamCase = ({ team }: TeamCaseType) => {
  return (
    <section className={styles['team-case']}>
      <Container>
        <div className={styles['team-case__content']}>
          {team.title && (
            <h2 className={classNames('h2', styles['title'])}>{team.title}</h2>
          )}
          <ul className={styles['list']}>
            {team.data?.map((item) => (
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
