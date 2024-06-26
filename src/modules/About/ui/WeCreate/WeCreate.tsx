import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
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
    src: '/images/Home/preview.jpg',
    lottieFps: 151,
    description:
      'Every great app begins with a solid foundation. Our journey starts with Project Evaluation. Here, we dive deep into <span>understanding your vision</span> , <span>objectives</span>, and <span>target audience</span>. We conduct thorough <span>market research</span>, identify potential <span>challenges</span>, and define the project <span>scope</span>. ',
  },
  {
    title: 'UX/UI Design & Prototyping',
    src: '/images/Home/preview.jpg',
    lottieFps: 151,
    description:
      "Once we have a clear understanding of your project's goals, we set our creative minds in motion. Our talented designers work closely with you to craft a user experience (UX) and user interface (UI) that not only captivate users but also offer intuitive navigation. Through <span>wireframes</span>, <span>mockups</span>, and <span>interactive prototypes</span>, we bring your vision to life on the screen, ensuring that the design resonates with your brand identity.",
  },
  {
    title: 'Full-stack Development',
    src: '/images/Home/preview.jpg',
    lottieFps: 76,
    description:
      'Our experienced developers leverage the latest technologies to build a robust and scalable app. We follow agile methodologies, breaking the development process into sprints for better transparency and flexibility. Throughout this phase, we prioritize <span>code quality</span>, <span>security</span>, and <span>performance</span> to create an app that not only looks great but functions flawlessly.',
  },
  {
    title: 'QA and Testing',
    src: '/images/Home/preview.jpg',
    lottieFps: 76,
    description:
      'Quality is our hallmark, and we uphold it through rigorous Quality Assurance (QA) and Testing. Our dedicated QA team meticulously examines every feature, functionality, and aspect of the app. We simulate real-world user scenarios to identify and rectify any potential issues. Our aim is to deliver an app that not only meets but exceeds your expectations, ensuring a seamless user experience.',
  },
  {
    title: 'App Launch',
    src: '/images/Home/preview.jpg',
    lottieFps: 76,
    description:
      "The moment of truth arrives with Publishing/Launch. We guide you through the intricacies of app store submission, optimizing your app's presence for maximum visibility. Leveraging pre-launch marketing strategies, we create anticipation among your target audience. Then, as the launch day dawns, we monitor the release process closely, ensuring a smooth and successful launch.",
  },
  {
    title: 'Ongoing Support',
    src: '/images/Home/preview.jpg',
    description:
      "Our commitment to excellence doesn't stop at launch. Ongoing Support is a pivotal part of our journey. We continue to stand by your side, providing timely updates, security patches, and enhancements. Our dedicated support team remains accessible to address user inquiries and concerns, ensuring that your app maintains its peak performance and evolves in response to changing user needs.",
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
                  {lottieItem ? (
                    <Lottie
                      className={styles['item__img']}
                      animationData={lottieItem}
                      autoplay={true}
                      loop={true}
                    />
                  ) : (
                    <BackgroundImage
                      className={styles['item__img']}
                      src={item.src}
                      alt={'picture'}
                      position={'cover'}
                    />
                  )}

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
