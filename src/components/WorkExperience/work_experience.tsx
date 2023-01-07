import work_experience from '@/.data/work_experience'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import './style.scss'

export default function WorkExperience() {
  const list = Object.entries(work_experience).reverse()
  return (
    <>
      <div className="flex flex-col flex-grow h-full" id={PAGES.WORK_EXP}>
        <header className="">
          <h3 className="section-heading">Work Experience</h3>
        </header>
        <section className="boxed_layout overflow-y-auto">
          <div className="timeline-listing ">
            {list.map(([year, experiences], yidx) => {
              return (
                <div key={`year_${year}_${yidx}`}>
                  <h3 className="sticky top-0 watermark__text">{year}</h3>
                  {experiences.map(
                    ({ org, roles, timeline, location, description }, idx) => (
                      <div key={idx} className="timeline__card">
                        <div>
                          <p className="work__org mb-1">{org}</p>
                          <ul className="flex dot-list meta gap-[4px] flex-wrap">
                            {roles?.map((role, roleIdx) => (
                              <li
                                className="text-sm list-item"
                                title={role}
                                key={roleIdx}
                              >
                                <small>{role}</small>
                              </li>
                            ))}
                          </ul>
                          <p className="description text-normal text-xs my-2">
                            {description}
                          </p>
                          <ul className="dot-list opacity-70">
                            <li className="list-item" title={timeline}>
                              {timeline}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )
                  )}
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
    </>
  )
}
