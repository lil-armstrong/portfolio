import '@fontsource-variable/inter'
import '@fontsource-variable/manrope'
import 'animate.css'
import React, { useEffect } from 'react'

import AboutMe from '@/components/AboutMe/AboutMe'
import Blog from '@/components/Blog/Blog'
import Certifications from '@/components/Certifications'
import ContactMe from '@/components/ContactMe/ContactMe'
import HeroNavigation from '@/components/Hero/HeroNavigation'
import Menu from '@/components/Menu/menu'
import Projects from '@/components/Projects/Projects'
import ScrollButton from '@/components/ScrollButton'
import Skills from '@/components/SkillSet'
import Tab from '@/components/Tab'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import TextTypingEffect from '@/components/TypeWriter/type_writer'
import WorkExperience from '@/components/WorkExperience'
import { CONTACT_LINKS } from '@/constant/contact'
import usePage from '@/hook/usePage'
import useTheme from '@/hook/useTheme'
import '@/styles/index.scss'
import { PAGES } from '@/types/pages'

import {
  CollapsibleStyled,
  CollapsibleWrapperStyled,
  ContainerStyled,
  MainContentStyled,
  MenuStyled,
  ScrollButtonWrapperStyled,
  TabContentContainerStyled,
  TabContentStyled,
  TabInnerContainerStyled,
} from './styled'
import Hero from '@/components/Hero/Hero'

const HERO_ID = 'page_hero'
const MAIN_CONTENT_ID = 'main-content'

const tab: Record<
  PAGES,
  { title: JSX.Element | null; content: () => JSX.Element | null }
> = {
  [PAGES.ABOUT]: {
    title: <p>About Me</p>,
    content: AboutMe,
  },

  [PAGES.WORK_EXP]: {
    title: <p>Work Experience</p>,
    content: WorkExperience,
  },
  [PAGES.SKILL]: {
    title: <p>Skills</p>,
    content: Skills,
  },
  [PAGES.CERTIFICATION]: {
    title: <p>Certifications</p>,
    content: Certifications,
  },
  [PAGES.PROJECT]: {
    title: <p>Projects</p>,
    content: Projects,
  },
  [PAGES.BLOG]: {
    title: <p>Blog</p>,
    content: Blog,
  },
  [PAGES.CONTACT]: {
    title: <p>Contact</p>,
    content: ContactMe,
  },
}

// MAIN APP
function App() {
  const theme = useTheme()
  const { activePage, onPageChange } = usePage()
  const menuContainerRef = React.createRef<HTMLDivElement>()
  const heroContentRef = React.createRef<HTMLDivElement>()
  const mainContentRef = React.createRef<HTMLDivElement>()

  const RenderTabContent = React.useCallback(() => {
    const page: PAGES = activePage ? activePage : PAGES.ABOUT

    const value = tab[page]
    const key = page

    return (
      <TabContentStyled>
        <value.content key={`tab_body_${key}`} />
      </TabContentStyled>
    )
  }, [activePage])

  const isMenuItemActive = React.useCallback(
    (itemId: PAGES) => {
      return activePage == itemId
    },
    [activePage]
  )

  useEffect(() => {
    const body = document?.body
    if (theme && body) {
      body?.setAttribute('data-theme', theme?.mode)
    }
  }, [theme.mode])

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent)
      const viewportHeight = isMobileDevice
        ? window.outerHeight
        : window.innerHeight

      if (mainContentRef.current) {
        if (activePage) {
          const rect = mainContentRef.current.getBoundingClientRect()
          // Check if the element is within the viewport
          const inView =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth)

          if (!inView) {
            mainContentRef.current.animate(
              [
                // { transform: `translateY(-${viewportHeight}px)` }, // Start at the bottom of the viewport
                {
                  transform: `translateY(-100%)`,
                }, // Start at the bottom of the viewport
                // End at the top of the viewport
              ],
              {
                duration: 1000, // Animation duration in milliseconds
                easing: 'ease-out', // Animation easing function
                fill: 'forwards', // Keep the final state
              }
            )
          }
        } else {
          mainContentRef.current.animate(
            [
              { transform: `translateY(0px)` },
            ],
            {
              duration: 1000, // Animation duration in milliseconds
              easing: 'ease-out', // Animation easing function
              fill: 'forwards', // Keep the final state
            }
          )
        }
      }
    }

    handleResize() // Call initially to handle the current window size
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activePage])

  return (
    <>
      <ContainerStyled role="presentation">
        {/* <FixedRightPanel /> */}
        <CollapsibleStyled ref={menuContainerRef}>
          <CollapsibleWrapperStyled>
            <ThemeSwitcher onChange={theme.onToggle} mode={theme?.mode} />

            {/* Menu bar */}
            <MenuStyled container={menuContainerRef}>
              <div role="presentation">
                {Object.entries(tab).map(([id, { title }]) => (
                  <Menu.Item
                    role="menuitem"
                    key={id}
                    text={title && title}
                    title={id}
                    tabIndex={0}
                    aria-readonly
                    onClick={() => {
                      onPageChange(id as PAGES)
                    }}
                    active={isMenuItemActive(id as PAGES)}
                  />
                ))}
              </div>
            </MenuStyled>
            {/* END: Menu bar */}

            <ScrollButtonWrapperStyled className="floating__btn">
              <ScrollButton />
            </ScrollButtonWrapperStyled>
          </CollapsibleWrapperStyled>
        </CollapsibleStyled>

        <Hero
          id={HERO_ID}
          ref={heroContentRef}
          mainTitle="Ebong Okposong"
          contactLinks={CONTACT_LINKS}
          subTitle={
            <ul className="list list-row " style={{ justifyContent: 'center' }}>
              <li className="list-item font-bold">
                <TextTypingEffect
                  speed={1000}
                  loop
                  text={[
                    [
                      ` <strong class="highlight">Roles</strong> Frontend_Engineer`,
                      ` Backend_Engineer`,
                      ` Technical_writer`,
                    ],
                    [
                      `<strong class="highlight">Interest</strong> Web2_development`,
                      ` Web3_development`,
                      ` Mobile_development`,
                      ` Electronics`,
                      ` Design_(UI/UX)`,
                    ],
                  ]}
                />
              </li>
            </ul>
          }
        >
          <HeroNavigation />
        </Hero>

        {/* Tab*/}
        <MainContentStyled
          ref={mainContentRef}
          id={MAIN_CONTENT_ID}
          className="hidden_scrollbar"
        >
          <Tab>
            {() => (
              <TabInnerContainerStyled className="hidden_scrollbar">
                <TabContentContainerStyled className="hidden_scrollbar">
                  <RenderTabContent />

                  {/* Keep scrolling section*/}
                  <div className="scroll-indicator-container">
                    <div className="scroll-indicator">
                      <div>
                        <span>KEEP SCROLLING</span>
                      </div>
                    </div>
                  </div>
                </TabContentContainerStyled>
              </TabInnerContainerStyled>
            )}
          </Tab>
        </MainContentStyled>
      </ContainerStyled>
    </>
  )
}

export default App
