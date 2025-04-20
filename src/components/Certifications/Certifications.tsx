import { RiExternalLinkLine } from 'react-icons/ri'
import certifications from '@/.data/certifications'
import { PAGES } from '@/types/pages'
import SectionNavigationBar from '../SectionNavigation/SectionNavigation'
import './style.scss'
import {
  ContainerStyled,
  ContentBoxStyled,
  InnerContainerStyled,
  ListContainerStyled,
  ListItemStyled,
  ListStyled,
  SectionFooterStyled,
  SectionHeaderStyled,
  SectionHeaderTitleStyled,
} from '@/components/common/styled'
import { CertificationsCardStyled } from './styled'

export function Certifications() {
  return (
    <ContainerStyled>
      <SectionHeaderStyled>
        <SectionHeaderTitleStyled>Certification</SectionHeaderTitleStyled>
      </SectionHeaderStyled>

      <InnerContainerStyled id={PAGES.CERTIFICATION}>
        <ContentBoxStyled>
          <ListContainerStyled>
            <ListStyled className="lg:columns-2 gap-[20px] py-[30px] flex-grow ">
              {certifications?.map(({ name, timeline, link }, idx) => (
                <ListItemStyled $grow key={idx} className={`card mb-[20px]`}>
                  <CertificationsCardStyled>
                    <p className="cert__title mb-1">{name}</p>
                    <ul className="dot-list meta opacity-60 font-medium">
                      <li className="list-item" title={timeline}>
                        {timeline}
                      </li>
                    </ul>
                    <a
                      href={link}
                      target="_blank"
                      role="link"
                      rel="noreferrer"
                      aria-label={`Visit external link: ${link}`}
                      className="absolute right-[30px] top-[30px]"
                    >
                      <RiExternalLinkLine role="presentation" />
                    </a>
                  </CertificationsCardStyled>
                </ListItemStyled>
              ))}
            </ListStyled>
          </ListContainerStyled>
        </ContentBoxStyled>
      </InnerContainerStyled>

      <SectionFooterStyled>
        <SectionNavigationBar
          leftSlot={{ content: 'Skills', to: PAGES.SKILL }}
          rightSlot={{
            content: 'Projects',
            to: PAGES.PROJECT,
          }}
        />
      </SectionFooterStyled>
    </ContainerStyled>
  )
}

export default Certifications
