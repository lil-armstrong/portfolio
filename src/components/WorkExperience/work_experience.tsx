import work_experience from '@/.data/work_experience'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import './style.scss'
import React from 'react'
import type { TSingleWorkExperience } from './IProps'
import { StyledPictureHolder, StyledTimelineCard } from './styled'
import cn from 'classnames'
import { AiOutlineCalendar } from 'react-icons/ai'

export default function WorkExperience() {
  const list = Object.entries(work_experience).reverse()

  return (
    <div className="max-h-screen h-full flex-grow overflow-hidden">
      <div className="flex flex-col flex-grow " id={PAGES.WORK_EXP}>
        <header className="">
          <h3 className="section-heading">Work Experience</h3>
        </header>
        <section className="boxed_layout overflow-y-auto">
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
      </div>
      <div className="sticky bottom-0 w-full left-0  z-[100]">
        <BottomNavigation
          leftSlot={{ content: 'About', to: PAGES.ABOUT }}
          rightSlot={{
            content: 'Skills',
            to: PAGES.SKILL,
          }}
        />
      </div>
    </div>
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
              <AiOutlineCalendar /> {timeline}
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
