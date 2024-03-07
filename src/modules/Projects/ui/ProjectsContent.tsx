import React from 'react'
import Footer from '@/components/Footer/Footer'
import CTA from '@/modules/Home/ui/CTA/CTA'
import HeroSection from '@/modules/Projects/ui/HeroSection/HeroSection'
import BlogSection from '@/modules/Projects/ui/BlogSection/BlogSection'
import BlogNavigation from '@/modules/Projects/ui/BlogNavigation/BlogNavigation'

const ProjectsContent = () => {
  return (
    <main>
      <HeroSection />
      <BlogNavigation />
      <BlogSection />
      <CTA />
      <Footer />
    </main>
  )
}

export default ProjectsContent
