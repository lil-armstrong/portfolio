import { RiExternalLinkLine } from 'react-icons/ri'
import certifications from '@/.data/certifications'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import './style.scss'
import { ContainerStyled } from '../common/styled'

export function Certifications() {
  return (
    <ContainerStyled>
      <h3 className="section-heading">Certification</h3>
      <div className="boxed_layout">
        <ul className="lg:columns-2 gap-[20px] py-[30px] flex-grow ">
          {certifications?.map(({ name, timeline, link }, idx) => (
            <li key={idx} className={`card mb-[20px]`}>
              <div>
                <p className="cert__title mb-1">{name}</p>
                <ul className="dot-list meta opacity-60 font-medium">
                  <li className="list-item" title={timeline}>
                    {timeline}
                  </li>
                </ul>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-[30px] top-[30px]"
                >
                  <RiExternalLinkLine />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute w-full left-0 bottom-0">
        <BottomNavigation
          leftSlot={{ content: 'Skills', to: PAGES.SKILL }}
          rightSlot={{
            content: 'Projects',
            to: PAGES.PROJECT,
          }}
        />
      </div>
    </ContainerStyled>
  )
}

export default Certifications
