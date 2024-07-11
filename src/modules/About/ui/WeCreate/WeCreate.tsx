import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import dynamic from 'next/dynamic'
import Lottie from 'lottie-react'

const Line = dynamic(() => import('@/modules/About/ui/LottieLine/LottieLine'), {
  ssr: false,
})

import styles from './WeCreate.module.scss'

import lottie1 from './data/1.json'
import lottie2 from './data/2.json'
import lottie3 from './data/3.json'
import lottie4 from './data/4.json'
import lottie5 from './data/5.json'
import lottie1_item from './data/1_item.json'
import lottie2_item from './data/2_item.json'
import lottie3_item from './data/3_item.json'
import lottie4_item from './data/4_item.json'
import lottie5_item from './data/5_item.json'
import lottie6_item from './data/6_item.json'

const data = [
  {
    title: 'Project evaluation',
    lottieFps: 151,
    description:
      'Every great app starts with a <span>strong foundation</span>. Our journey begins with Project Evaluation. At this stage, we thoroughly delve into <span>understanding your vision</span>, objectives, and target <span>audience</span>. We conduct extensive market research, identify potential challenges, and <span>define the project scope</span>.',
  },
  {
    title: 'UX/UI Design & Prototyping',
    lottieFps: 151,
    description:
      "After understanding your project's goals, we <span>set our creative minds in motion</span>. Our talented designers work <span>closely with you</span> to create a user experience (UX) and user interface (UI) that captivate users while also offering intuitive navigation. Using wireframes, mockups, and interactive prototypes, <span>we bring your vision to life on the screen</span>, ensuring that the design aligns with your brand identity.",
  },
  {
    title: 'Full-stack Development',
    lottieFps: 76,
    description:
      'Our <span>experienced developers</span> utilize the latest technologies to build a strong and scalable app. We follow <span>agile methodologies</span>, dividing the development process into sprints for <span>improved transparency and flexibility</span>. During this phase, we emphasize code quality, security, and performance to ensure that the app not only looks great but also functions seamlessly.',
  },
  {
    title: 'QA and Testing',
    lottieFps: 76,
    description:
      'Our dedicated QA team <span>carefully examines every feature</span>, functionality, and aspect of the app. We simulate real-world user scenarios to identify and fix any potential issues. Our goal is to <span>deliver an app that not only meets but exceeds your expectations</span>, ensuring a smooth user experience.',
  },
  {
    title: 'App Launch',
    lottieFps: 76,
    description:
      'We will help you <span>navigate the complexities</span> of submitting your app to the app store and optimize its visibility. By using pre-launch marketing strategies, we will <span>generate excitement among your target audience</span>. On launch day, we will closely monitor the release process to ensure a smooth and successful launch.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Our dedication to excellence extends beyond launch. Ongoing support is a <span>crucial part of our journey</span>. We remain by your side, offering timely updates, security patches, and improvements. Our committed support team is <span>available to address user queries and concerns</span>, ensuring that your app maintains peak performance and evolves to meet changing user needs.',
  },
]

const WeCreate = () => {
  return (
    <section className={styles['create']}>
      <Container>
        <ul className={styles['create__list']}>
          {data.map((item, index) => {
            let lottieSrc
            let lottieItem
            switch (index) {
              case 0:
                lottieSrc = lottie1
                lottieItem = lottie1_item
                break
              case 1:
                lottieSrc = lottie2
                lottieItem = lottie2_item
                break
              case 2:
                lottieSrc = lottie3
                lottieItem = lottie3_item
                break
              case 3:
                lottieSrc = lottie4
                lottieItem = lottie4_item
                break
              case 4:
                lottieSrc = lottie5
                lottieItem = lottie5_item
                break
              case 5:
                lottieItem = lottie6_item
                break
            }

            return (
              <li key={item.title} className={styles['item']}>
                {index < 5 && (
                  <Line
                    className={styles['item__lottie']}
                    src={lottieSrc}
                    fps={item.lottieFps}
                  />
                )}
                <AnimatedElement amount={'some'}>
                  <Lottie
                    className={styles['item__img']}
                    animationData={lottieItem}
                    autoplay={true}
                    loop={true}
                  />
                  <h2 className={classNames('h2', styles['item__title'])}>
                    {item.title}
                  </h2>
                  <p
                    className={styles['item__description']}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </AnimatedElement>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export default WeCreate
