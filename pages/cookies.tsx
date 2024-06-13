import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import BackButtonVariant from '@/ui/BackButtonVariant/BackButtonVariant'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

export default function Cookies() {
  const { width } = useWindowDimensions()
  return (
    <>
      <Head>
        <title>Cookies – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'COOKIE POLICY'}>
        <Container>
          <div className={'editor-content wrapper-class'}>
            <BackButtonVariant absolute={width <= breakpointMob} />
            <h1>Cookie Policy</h1>
            <h2>Introduction</h2>
            <p>
              At Outstafford, we use cookies to improve your experience on our
              website. This Cookie Policy explains what cookies are, how we use
              them, and how you can manage your cookie preferences.
            </p>
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help the website recognize your device
              and remember information about your visit, such as your
              preferences and actions.
            </p>
            <h2>How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ol>
              <li>
                Essential Cookies: These cookies are necessary for the website
                to function properly and cannot be disabled. They enable core
                functionalities such as security, network management, and
                accessibility.
              </li>
              <li>
                Performance Cookies: These cookies help us understand how
                visitors interact with our website by collecting and reporting
                information anonymously. They allow us to improve the
                performance and functionality of our site.
              </li>
              <li>
                Functional Cookies: These cookies allow our website to remember
                choices you make, such as your language preferences and provide
                enhanced, more personalized features.
              </li>
              <li>
                Targeting Cookies: These cookies are used to deliver
                advertisements that are more relevant to you and your interests.
                They also help measure the effectiveness of advertising
                campaigns.
              </li>
            </ol>
            <h2>Managing Your Cookie Preferences</h2>
            <p>
              You can manage your cookie preferences through your web browser
              settings. Most browsers allow you to block cookies or delete them.
              However, disabling cookies may affect the functionality of our
              website and your ability to use certain features.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page, and the revised policy will be
              effective immediately upon posting.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p>
              Outstafford Email:{' '}
              <Link target="_blank" href={'mailto:hey@outstafford.com'}>
                hey@outstafford.com
              </Link>
            </p>
          </div>
        </Container>
      </PageTransitionLayout>
    </>
  )
}
