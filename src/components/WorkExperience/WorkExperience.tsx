import work_experience from '@/.data/work_experience'
import { PAGES } from '@/types/pages'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import SectionNavigationBar from '../SectionNavigation/SectionNavigation'
import type { ISingleWorkExperience } from './IProps'
import './style.scss'
import {
  StyledPictureHolder,
  StyledTimelineCard,
  StyledTimelineStyled,
  TimelineYearStyled,
} from './styled'
import {
  ContainerStyled,
  InnerContainerStyled,
  SectionFooterStyled,
  SectionHeaderStyled,
  SectionHeaderTitleStyled,
} from '../common/styled'
import HighlightList from './HighlightList'

export default function WorkExperience() {
  const list = Object.entries(work_experience).reverse()

  return (
    <ContainerStyled>
      <SectionHeaderStyled>
        <SectionHeaderTitleStyled>Work Experience</SectionHeaderTitleStyled>
      </SectionHeaderStyled>

      <InnerContainerStyled id={PAGES.WORK_EXP}>
        <StyledTimelineStyled />
        <div className="timeline-listing">
          {list.map(([year, experiences], yidx) => {
            return (
              <div key={`year_${year}_${yidx}`}>
                <TimelineYearStyled>{year}</TimelineYearStyled>

                {experiences.map((data, idx) => (
                  <WorkExperienceCard key={idx} data={data} />
                ))}
              </div>
            )
          })}
        </div>
      </InnerContainerStyled>

      <SectionFooterStyled>
        <SectionNavigationBar
          leftSlot={{ content: 'About', to: PAGES.ABOUT }}
          rightSlot={{
            content: 'Skills',
            to: PAGES.SKILL,
          }}
        />
      </SectionFooterStyled>
    </ContainerStyled>
  )
}

function WorkExperienceCard(props: ISingleWorkExperience) {
  const [image, setImage] = React.useState<string>()
  const { image_url, org, roles, timeline, description, highlights } =
    props?.data

  React.useEffect(() => {
    if (image_url) {
      ;(() => {
        const image = new URL(image_url, window.location.href).href
        setImage(image)
      })()
    }
  }, [image_url])

  return (
    <>
      <StyledTimelineCard>
        <p className="work__org mb-1">{org}</p>

        <ul className="flex dot-list meta gap-[4px] flex-wrap items-center">
          {roles?.map((role, roleIdx) => (
            <li className="text-sm list-item" title={role} key={roleIdx}>
              <small>{role}</small>
            </li>
          ))}
        </ul>
        <div>
          <ul className="dot-list opacity-70">
            <li className="list-item flex-row inline-flex" title={timeline}>
              <AiOutlineCalendar role="presentation" /> {timeline}
            </li>
          </ul>
        </div>

        <p className="description text-normal text-xs my-2">{description}</p>

        <HighlightList highlights={highlights} />

        {image ? (
          <StyledPictureHolder>
            <img
              alt={`${org} logo`}
              src={new URL(image, window.location.origin).href}
            />
          </StyledPictureHolder>
        ) : null}
      </StyledTimelineCard>
    </>
  )
}
