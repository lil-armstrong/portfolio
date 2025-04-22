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
  TitleContentStyled,
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
        <TitleContentStyled>
          {/* {image ? (
            <StyledPictureHolder>
              <img
                alt={`${org} logo`}
                src={new URL(image, window.location.origin).href}
              />
            </StyledPictureHolder>
          ) : null} */}
          <div>
            <p className="work__org">{org}</p>

            <ul className="dot-list meta">
              {roles?.map((role, roleIdx) => (
                <li className="list-item" title={role} key={roleIdx}>
                  <small>{role}</small>
                </li>
              ))}
            </ul>

            <div className="work_date" title={timeline}>
              <AiOutlineCalendar size={12} role="presentation" />
              <span>{timeline}</span>
            </div>
          </div>
        </TitleContentStyled>

        <p className="description text-normal text-xs my-2">{description}</p>

        <HighlightList highlights={highlights} />
      </StyledTimelineCard>
    </>
  )
}
