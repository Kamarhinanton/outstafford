import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import BackButtonVariant from '@/ui/BackButtonVariant/BackButtonVariant'
import { breakpointMob } from '@/utils/variables'
import useWindowDimensions from '@/hooks/useWindowDimensions'

export default function Privacy() {
  const { width } = useWindowDimensions()

  return (
    <>
      <Head>
        <title>Privacy – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'PRIVACY POLICY'}>
        <Container>
          <div className={'editor-content wrapper-class'}>
            <BackButtonVariant absolute={width <= breakpointMob} />
            <h1>Privacy Policy</h1>
            <h2>Introduction</h2>
            <p>
              Welcome to Outstafford! We are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your personal information when you visit our website or
              use our mobile and web app development services.
            </p>
            <h2>Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ol>
              <li>
                Personal Information: This includes your name, email address,
                phone number, and any other information you provide to us when
                contacting us or using our services.
              </li>
              <li>
                Technical Information: This includes your IP address, browser
                type, operating system, and other technical details that help us
                improve our website and services.
              </li>
              <li>
                Usage Information: This includes information about how you use
                our website and services, such as pages visited, time spent on
                the site, and other usage data.
              </li>
            </ol>
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ol>
              <li>
                Provide Services: Deliver the mobile and web app development
                services you have requested.
              </li>
              <li>
                Improve Our Services: Understand how you use our services to
                improve and enhance them.
              </li>
              <li>
                Communicate with You: Respond to your inquiries, provide
                customer support, and send you updates and promotional
                materials.
              </li>
              <li>
                Comply with Legal Obligations: Meet legal and regulatory
                requirements.
              </li>
            </ol>
            <h2>Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except as described below:
            </p>
            <ol>
              <li>
                Service Providers: We may share your information with
                third-party service providers who assist us in operating our
                website and providing our services.
              </li>
              <li>
                Legal Requirements: We may disclose your information when
                required by law or to protect our rights, property, or safety.
              </li>
            </ol>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ol>
              <li>
                Access Your Information: Request a copy of the personal
                information we hold about you.
              </li>
              <li>
                Correct Your Information: Request corrections to any inaccurate
                or incomplete information.
              </li>
              <li>
                Delete Your Information: Request the deletion of your personal
                information, subject to certain exceptions.
              </li>
              <li>
                Opt-Out: Opt-out of receiving promotional emails and other
                communications from us.
              </li>
            </ol>
            <h2>Data Security</h2>
            <p>We use your information to:</p>
            <ol>
              <li>
                Provide Services: Deliver the mobile and web app development
                services you have requested.
              </li>
              <li>
                Improve Our Services: Understand how you use our services to
                improve and enhance them.
              </li>
              <li>
                Communicate with You: Respond to your inquiries, provide
                customer support, and send you updates and promotional
                materials.
              </li>
              <li>
                Comply with Legal Obligations: Meet legal and regulatory
                requirements.
              </li>
            </ol>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
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
