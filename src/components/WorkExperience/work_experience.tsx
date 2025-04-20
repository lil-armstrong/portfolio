import work_experience from '@/.data/work_experience'
import { PAGES } from '@/types/pages'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import type { TSingleWorkExperience } from './IProps'
import './style.scss'
import { StyledPictureHolder, StyledTimelineCard } from './styled'
import { ContainerStyled } from '../common/styled'

export default function WorkExperience() {
  const list = Object.entries(work_experience).reverse()

  return (
    <ContainerStyled>
      <h3 className="section-heading">Work Experience</h3>
      <header className=""></header>
      <section className="boxed_layout py-[30px]" id={PAGES.WORK_EXP}>
        <div className="timeline-listing">
          {list.map(([year, experiences], yidx) => {
            return (
              <div key={`year_${year}_${yidx}`}>
                <h3 className="sticky top-0 watermark__text">{year}</h3>
                {experiences.map((data, idx) => (
                  <WorkExperienceCard key={idx} data={data} />
                ))}
              </div>
            )
          })}
        </div>
      </section>
      <div className="absolute bottom-0 w-full left-0  z-[100]">
        <BottomNavigation
          leftSlot={{ content: 'About', to: PAGES.ABOUT }}
          rightSlot={{
            content: 'Skills',
            to: PAGES.SKILL,
          }}
        />
      </div>
    </ContainerStyled>
  )
}

function WorkExperienceCard(props: TSingleWorkExperience) {
  const [image, setImage] = React.useState<string>()
  const { image_url, org, roles, timeline, location, description } = props?.data

  React.useEffect(() => {
    if (image_url) {
      ;(async () => {
        const image = new URL(image_url, window.location.href).href
        setImage(image)
      })()
    }
  }, [image_url])

  return (
    <>
      <StyledTimelineCard className="timeline__card">
        <div>
          <ul className="dot-list opacity-70">
            <li className="list-item flex-row inline-flex" title={timeline}>
              <AiOutlineCalendar role="presentation" /> {timeline}
            </li>
          </ul>
        </div>
        <p className="work__org mb-1">{org}</p>
        <ul className="flex dot-list meta gap-[4px] flex-wrap items-center">
          {roles?.map((role, roleIdx) => (
            <li className="text-sm list-item" title={role} key={roleIdx}>
              <small>{role}</small>
            </li>
          ))}
        </ul>
        <p className="description text-normal text-xs my-2">{description}</p>

        {image ? (
          <StyledPictureHolder>
            <picture>
              <img alt={`${org} logo`} src={image} />
            </picture>
          </StyledPictureHolder>
        ) : null}
      </StyledTimelineCard>
    </>
  )
}
