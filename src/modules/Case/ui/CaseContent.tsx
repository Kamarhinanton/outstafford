import React from 'react'
import HeroCaseSection from '@/modules/Case/ui/HeroCaseSection/HeroCaseSection'
import Footer from '@/components/Footer/Footer'
import ChallengesCase from '@/modules/Case/ui/ChallengesCase/ChallengesCase'
import MosaicSection from '@/modules/Case/ui/MosaicSection/MosaicSection'
import SummaryCase from '@/modules/Case/ui/SummaryCase/SummaryCase'
import TeamCase from '@/modules/Case/ui/TeamCase/TeamCase'
// import MoreCases from '@/modules/Case/ui/MoreCases/MoreCases'
import BigTitleCase from '@/modules/Case/ui/BigTitleCase/BigTitleCase'
import ExploreMoreProjects from '@/modules/Case/ui/ExploreMoreProjects/ExploreMoreProjects'
import { SingleProjectsType } from '@/utils/globalTypes'
const CaseContent = ({ frontMatter }: SingleProjectsType) => {
  return (
    <main>
      <HeroCaseSection data={frontMatter.hero} />
      <ChallengesCase data={frontMatter.challenges} />
      <MosaicSection mosaicData={frontMatter.mosaic_1} />
      <MosaicSection mosaicData={frontMatter.mosaic_2} />
      <SummaryCase summary={frontMatter.summary} />
      <TeamCase team={frontMatter.team} />
      <BigTitleCase />
      <ExploreMoreProjects />
      {/*<MoreCases />*/}
      <Footer />
    </main>
  )
}

export default CaseContent
