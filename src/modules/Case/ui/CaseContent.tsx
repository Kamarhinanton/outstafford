import React from 'react'
import HeroCaseSection from '@/modules/Case/ui/HeroCaseSection/HeroCaseSection'
import Footer from '@/components/Footer/Footer'
import ChallengesCase from '@/modules/Case/ui/ChallengesCase/ChallengesCase'
import MosaicSection from '@/modules/Case/ui/MosaicSection/MosaicSection'
import SummaryCase from '@/modules/Case/ui/SummaryCase/SummaryCase'
import TeamCase from '@/modules/Case/ui/TeamCase/TeamCase'
import BigTitleCase from '@/modules/Case/ui/BigTitleCase/BigTitleCase'
import ExploreMoreProjects from '@/modules/Case/ui/ExploreMoreProjects/ExploreMoreProjects'
import { OneProjectType } from '@/utils/globalTypes'
const CaseContent = ({ project }: { project: OneProjectType }) => {
  const {
    hero,
    project_topics,
    hero_columns,
    challenges,
    summary,
    mosaic,
    team,
    team_title,
  } = project.attributes
  return (
    <main>
      <HeroCaseSection
        hero={hero}
        project_topics={project_topics}
        hero_columns={hero_columns}
      />
      <ChallengesCase challenges={challenges} />
      {mosaic.map((item) => (
        <MosaicSection key={item.id} mosaic={item} />
      ))}
      <SummaryCase summary={summary} />
      <TeamCase team={team} team_title={team_title} />
      <BigTitleCase />
      <ExploreMoreProjects />
      <Footer />
    </main>
  )
}

export default CaseContent
