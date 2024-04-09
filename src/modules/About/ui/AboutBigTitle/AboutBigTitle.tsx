import React from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'

import styles from './AboutBigTitle.module.scss'

const data = [
  {
    title: 'Project evaluation',
    href: '/images/Home/preview.jpg',
    description:
      'Every great app begins with a solid foundation. Our journey starts with Project Evaluation. Here, we dive deep into understanding your vision, objectives, and target audience. We conduct thorough market research, identify potential challenges, and define the project scope. ',
  },
  {
    title: 'UX/UI Design & Prototyping',
    href: '/images/Home/preview.jpg',
    description:
      "Once we have a clear understanding of your project's goals, we set our creative minds in motion. Our talented designers work closely with you to craft a user experience (UX) and user interface (UI) that not only captivate users but also offer intuitive navigation. Through wireframes, mockups, and interactive prototypes, we bring your vision to life on the screen, ensuring that the design resonates with your brand identity.",
  },
  {
    title: 'Full-stack Development',
    href: '/images/Home/preview.jpg',
    description:
      'Our experienced developers leverage the latest technologies to build a robust and scalable app. We follow agile methodologies, breaking the development process into sprints for better transparency and flexibility. Throughout this phase, we prioritize code quality, security, and performance to create an app that not only looks great but functions flawlessly.',
  },
  {
    title: 'QA and Testing',
    href: '/images/Home/preview.jpg',
    description:
      'Quality is our hallmark, and we uphold it through rigorous Quality Assurance (QA) and Testing. Our dedicated QA team meticulously examines every feature, functionality, and aspect of the app. We simulate real-world user scenarios to identify and rectify any potential issues. Our aim is to deliver an app that not only meets but exceeds your expectations, ensuring a seamless user experience.',
  },
  {
    title: 'App Launch',
    href: '/images/Home/preview.jpg',
    description:
      "The moment of truth arrives with Publishing/Launch. We guide you through the intricacies of app store submission, optimizing your app's presence for maximum visibility. Leveraging pre-launch marketing strategies, we create anticipation among your target audience. Then, as the launch day dawns, we monitor the release process closely, ensuring a smooth and successful launch.",
  },
  {
    title: 'Ongoing Support',
    href: '/images/Home/preview.jpg',
    description:
      "Our commitment to excellence doesn't stop at launch. Ongoing Support is a pivotal part of our journey. We continue to stand by your side, providing timely updates, security patches, and enhancements. Our dedicated support team remains accessible to address user inquiries and concerns, ensuring that your app maintains its peak performance and evolves in response to changing user needs.",
  },
]

const AboutBigTitle = () => {
  return (
    <div className={styles['about-title']}>
      <Container>
        <h1 className={classNames(styles['title'], 'h1')}>
          <strong>Here&apos;s how</strong>
          <strong>we create</strong>
          <strong>
            our <span>best apps</span>
          </strong>
        </h1>
      </Container>
    </div>
  )
}

export default AboutBigTitle
