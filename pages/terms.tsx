import React from 'react'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import Head from 'next/head'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import BackButtonVariant from '@/ui/BackButtonVariant/BackButtonVariant'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

export default function Terms() {
  const { width } = useWindowDimensions()

  return (
    <>
      <Head>
        <title>Terms – Outstafford</title>
      </Head>
      <PageTransitionLayout description={'TERMS OF SERVICE'}>
        <Container>
          <div className={'editor-content wrapper-class'}>
            <BackButtonVariant absolute={width <= breakpointMob} />
            <h1>Terms of Service</h1>
            <h2>Introduction</h2>
            <p>
              Welcome to Outstafford! By accessing or using our website and
              services, you agree to be bound by these Terms of Service. Please
              read them carefully. Lorem
            </p>
            <h2>Services</h2>
            <p>
              Outstafford provides mobile and web app development services. Our
              services are subject to these Terms of Service, and we reserve the
              right to modify or discontinue any part of our services at any
              time.
            </p>
            <h2>Use of Services</h2>
            <p>
              Eligibility: You must be at least 18 years old to use our
              services.
            </p>
            <p>
              Account: You may be required to create an account to access
              certain features. You are responsible for maintaining the
              confidentiality of your account information and for all activities
              that occur under your account.
            </p>
            <p>
              Prohibited Activities: You agree not to use our services for any
              unlawful or prohibited activities, including but not limited to
              spamming, hacking, or infringing on the rights of others.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All content and materials on our website, including text,
              graphics, logos, and software, are the property of Outstafford or
              its licensors and are protected by intellectual property laws. You
              may not use, reproduce, or distribute any content without our
              prior written permission.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Outstafford shall not be
              liable for any direct, indirect, incidental, special, or
              consequential damages resulting from your use of our services or
              inability to use our services.
            </p>
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold Outstafford harmless from any
              claims, losses, damages, liabilities, including legal fees,
              arising out of your use or misuse of our services, violation of
              these Terms of Service, or infringement of any rights of a third
              party.
            </p>
            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and
              access to our services at any time, without prior notice, for
              conduct that we believe violates these Terms of Service or is
              harmful to other users, us, or third parties.
            </p>
            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of the United States. Any disputes arising out of or
              in connection with these Terms of Service shall be subject to the
              exclusive jurisdiction of the courts in the United States.
            </p>
            <h2>Changes to These Terms of Service</h2>
            <p>
              We may update these Terms of Service from time to time. Any
              changes will be posted on this page, and the revised terms will be
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
