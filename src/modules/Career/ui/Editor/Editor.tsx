import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import StickyBlock from '@/modules/Career/ui/Editor/StickyBlock/StickyBlock'

import styles from './Editor.module.scss'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

const Editor = () => {
  return (
    <section className={styles['editor']}>
      <Container>
        <div className={styles['editor__content']}>
          <div className={styles['article']}>
            <div className={styles['article__top']}>
              <h1 className={classNames('h1', styles['title'])}>
                UX/Ui Designer
              </h1>
              <p className={styles['description']}>
                We’re looking for User Experience Designers and User Interface
                Designers of all levels to join the team. As Interaction
                Designers and Product Leads, you’ll help set pushing creative
                thinking, collaborate closely with other team members and
                clients, test into new ideas and features, and enhance existing
                ones while establishing scalable patterns across web,
                e-commerce, content platform, internal tools, native
                applications and more.
              </p>
            </div>
            <StickyBlock className={styles['sticky-block']} />
            <div className={styles['article__bottom']}>
              <h3>Initial responsibilities</h3>
              <ul>
                <li>
                  Develop wireframes, prototypes, and mockups for new features
                </li>
                <li>
                  Collaborate with product managers and developers to ensure
                  seamless and visually appealing designs
                </li>
                <li>
                  Conduct user research to guide design choices and improve
                  overall usability
                </li>
                <li>Coordinate with marketing for brand consistency</li>
              </ul>
              <h3>Signs this role is perfect for you</h3>
              <ul>
                <li>
                  Experience as a Mid to Senior level Designer or UX/UI Design
                  in Product environments, ideally in early stage companies or
                  products so you&apos;ve had experience designing from scratch
                  and not just polishing existing products
                </li>
                <li>A folio of beautiful product work</li>
                <li>
                  Experience creating design systems, processes and/or pattern
                  libraries
                </li>
                <li>
                  Excellent communication and collaboration skills, managing
                  Senior stakeholders through your design thinking
                </li>
                <li>Strong Figma skills</li>
                <li>
                  Someone who is a self starter who can come in and tell us how
                  to do design, not the other way around
                </li>
              </ul>
              <h3>Why you&apos;ll love working at Outstafford</h3>
              <p>
                We&apos;re a calm, profitable tech company. We know work is only
                one part of your life. And we expect you to fit it in around
                your family and life, not the other way around. But that
                doesn&apos;t mean we aren&apos;t ambitious.
              </p>
              <p>
                In just three years, our small team of ten has built the best
                toolkit for monetizing and growing your newsletter. Used by
                thousands of top newsletters and media brands — from Morning
                Brew to household names like James Clear and Tim Ferriss. And we
                have big plans for the next three years.
              </p>
              <p>
                You&apos;ll be working with awesome people, building a product
                people genuinely love.
              </p>
              <h3>Here are a few of the key benefits:</h3>
              <p>A fully remote team culture</p>
              <p>Annual team retreats (next up, Rome, Italy!)</p>
              <p>Generous PTO policy</p>
              <p>Side projects encouraged</p>
              <p>
                Most importantly, you have the unique opportunity to grow
                quickly alongside Outstafford, moulding your initial role into
                your dream one.
              </p>
              <h3>Next steps</h3>
              <ol>
                <li>Apply by filling out the short form</li>
                <li>
                  You may be invited to do a short, paid co-working exercise
                </li>
                <li>You may be invited to two interviews with our team</li>
                <li>
                  Within 30 days, you&apos;ll have an offer or a rejection
                </li>
              </ol>
            </div>
          </div>
          <div className={styles['editor__content_menu']}>
            <StickyBlock />
          </div>
        </div>
        <div className={styles['editor__fixed-button']}>
          <ButtonPrimary
            className={styles['editor__fixed-button_btn']}
            arrows={true}
            variant={'green'}
          >
            Apply
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default Editor
