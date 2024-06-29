import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { ProjectTeam } from '@/utils/globalTypes'
import { TeamProjectType } from '../../../../../pages/projects/[slug]'

import styles from './TeamCase.module.scss'

type TeamCaseType = {
  team: TeamProjectType[]
  team_title: {
    title: string
  }
}
const TeamCase = ({ team, team_title }: TeamCaseType) => {
  return team.length > 0 || team_title ? (
    <section className={styles['team-case']}>
      <Container>
        <div className={styles['team-case__content']}>
          {team_title && (
            <h2 className={classNames('h2', styles['title'])}>
              {team_title.title}
            </h2>
          )}
          <ul className={styles['list']}>
            {team.map((item) => (
              <li key={item.id} className={styles['list__item']}>
                {item.position && (
                  <p>
                    <span>{item.position}</span>
                  </p>
                )}
                <ul>
                  {item.name.map((name) => (
                    <li key={name.id}>{name.title}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  ) : null
}

export default TeamCase
