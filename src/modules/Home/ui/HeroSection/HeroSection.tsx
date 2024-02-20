import React from 'react'
import Container from '@/app/layouts/Container'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import Logo from '../../../../../public/icons/logo.svg'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div>
          <div>
            <Logo />
            <h3>
              Hey, we’re <span>Outstafford</span>
            </h3>
          </div>
          <h1>
            We <span>create</span> awesome mobile and web apps for{' '}
            <span>Startups</span>
          </h1>
          <ButtonPrimary arrows={true} size={'large'} variant={'transparent'}>
            Contact us
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
