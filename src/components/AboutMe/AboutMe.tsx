import React from 'react'
import usePage from '@/hook/usePage'
import { LINKS } from '@/types/links'
import { PAGES } from '@/types/pages'
import ReactMarkdown from 'react-markdown'
import SectionNavigationBar from '../SectionNavigation/SectionNavigation'
import {
  ContainerStyled,
  ContentBoxStyled,
  InnerContainerStyled,
  SectionFooterStyled,
  SectionHeaderStyled,
  SectionHeaderTitleStyled,
} from '../common/styled'
import {
  ActionBoxStyled,
  BoldTextStyled,
  ParagraphStyled,
  Heading2TextStyled,
  TitleTextStyled,
  Heading3TextStyled,
  UnorderedListItemStyled,
} from './styled'
import MePng from '@/assets/me.png'

const startYear = 2017
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear

const markdown = `
**Ebong, Okposong** is a full-stack developer with **${yearsOfExperience}+ years** experience building software application for both web and mobile platforms.
With proven track record across various industries including fintech, e-commerce, agriculture, and most recently electronics. Enjoys simplifying complex systems and creating smooth, reliable user experiences.


### Highlights:

- Improved frontend architecture to **speed up development by 30%**, and helped increase user retention by designing more intuitive mobile flows.
- Championed the adoption of rigorous code review processes across the project, **reducing production bugs by 35%** within the first quarter.
- Automated the deployment process using Expo’s EAS Update and Release system, cutting down the development team’s workload by **5 hours weekly**.

### Outside of work

Chess enthusiast, soccer player, table tennis lover, and spending time on what truly matters—good company, personal growth, and a clear mind.


`
export function AboutMe() {
  const setPage = usePage().onPageChange

  return (
    <>
      <ContainerStyled>
        <SectionHeaderStyled>
          <SectionHeaderTitleStyled>About Me</SectionHeaderTitleStyled>
        </SectionHeaderStyled>

        <InnerContainerStyled>
          {/* ABOUT */}
          <ContentBoxStyled>
            <img src={MePng} alt="Ebong, Okposong" width={200} />

            <ReactMarkdown
              components={{
                p: ParagraphStyled,
                strong: BoldTextStyled,
                h1: TitleTextStyled,
                h2: Heading2TextStyled,
                h3: Heading3TextStyled,
                li: UnorderedListItemStyled,
              }}
              children={markdown}
            />

            {/*Button*/}
            <ActionBoxStyled className="">
              <a
                href={LINKS?.CV}
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg "
              >
                Download CV
              </a>
              <span>OR</span>
              <button
                // href={`#${PAGES.CONTACT}`}
                // target="_blank"
                // rel="noreferrer"
                className="btn btn-lg"
                onClick={() => setPage && setPage(PAGES.CONTACT)}
              >
                📫 Reach out
              </button>
            </ActionBoxStyled>
          </ContentBoxStyled>
        </InnerContainerStyled>

        <SectionFooterStyled>
          <SectionNavigationBar
            leftSlot={{
              content: null,
              to: undefined,
            }}
            rightSlot={{
              content: 'Work Experience',
              to: PAGES.WORK_EXP,
            }}
          />
        </SectionFooterStyled>
      </ContainerStyled>
    </>
  )
}

export default AboutMe
