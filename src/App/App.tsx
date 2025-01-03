import AboutMe from '@/components/AboutMe/AboutMe'
import Blog from '@/components/Blog/Blog'
import Certifications from '@/components/Certifications'
import Collapsible from '@/components/Collapsible/Collapsible'
import ContactMe from '@/components/ContactMe/contact'
import Hero from '@/components/Hero/hero'
import Menu from '@/components/Menu/menu'
import Projects from '@/components/Projects/project'
import ScrollButton from '@/components/ScrollButton'
import Skills from '@/components/Skills/skills'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import TypeWriter from '@/components/TypeWriter/type_writer'
import WorkExperience from '@/components/WorkExperience/work_experience'
import { CONTACT_LINKS } from '@/constant/contact'
import usePage from '@/hook/usePage'
import useTheme from '@/hook/useTheme'
import '@/styles/index.scss'
import { PAGES } from '@/types/pages'
import '@fontsource/alexandria/200.css'
import '@fontsource/alexandria/300.css'
import '@fontsource/anonymous-pro'
import '@fontsource/bakbak-one'
import 'animate.css'
import cn from 'classnames'
import React, { createRef, useEffect } from 'react'
import { Poppable } from 'webrix/components'
import { SpanLink } from './styled'
import Tab from '@/components/Tab'

const GAP = 5

const tab: {
  [t in PAGES]: { title: JSX.Element | null; content: () => JSX.Element | null }
} = {
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
  [PAGES.CERT]: {
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

const HERO_ID = 'page_hero'
const MAIN_CONTENT_ID = 'main-content'

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
      <div className="h-full flex-grow m-auto">
        <value.content key={`tab_body_${key}`} />
      </div>
    )
  }, [activePage])

  const isMenuItemActive = React.useCallback(
    (itemId: PAGES) => {
      return activePage == itemId
    },
    [activePage]
  )

  const menu_placement = React.useCallback((rbr: DOMRect, tbr: DOMRect) => {
    const { vbefore, vcenter, vafter, hbefore, hcenter, hafter } =
      Poppable.Placements

    return [
      { ...vbefore(rbr, tbr, -GAP), ...hbefore(rbr, tbr, -GAP) }, // Top left
      { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr) }, // Top center
      { ...vbefore(rbr, tbr, -GAP), ...hafter(rbr, tbr, -GAP) }, // Top right
      { ...vafter(rbr, tbr, GAP), ...hbefore(rbr, tbr, -GAP) }, // Bottom left
      { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr) }, // Bottom center
      { ...vafter(rbr, tbr, GAP), ...hafter(rbr, tbr, -GAP) }, // Bottom left
      { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP) }, // Center left
      { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, -GAP) }, // Center right
    ]
  }, [])

  useEffect(() => {
    const body = document?.body
    if (theme && body) {
      body?.setAttribute('data-theme', theme?.mode)
    }
  }, [theme.mode])

  useEffect(() => {
    const viewportHeight = window.innerHeight

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

        !inView &&
          mainContentRef.current.animate(
            [
              { transform: `translateY(-${viewportHeight}px)` }, // Start at the bottom of the viewport
            ],
            {
              duration: 1000, // Animation duration in milliseconds
              easing: 'ease-out', // Animation easing function
              fill: 'forwards', // Keep the final state
            }
          )
      } else {
        mainContentRef.current.animate(
          [
            { transform: `translateY(${viewportHeight}px)` }, // Start at the bottom of the viewport
          ],
          {
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-out', // Animation easing function
            fill: 'forwards', // Keep the final state
          }
        )
      }
    }
  }, [activePage])

  return (
    <>
      <div
        role="presentation"
        className="block relative h-[100vh] overflow-hidden"
      >
        {/* <FixedRightPanel /> */}
        <Collapsible
          ref={menuContainerRef}
          className="fixed md:left-[20px]  top-[10px]  z-[10]"
        >
          <div className="flex flex-col gap-[10px] items-center">
            <ThemeSwitcher onChange={theme.onToggle} mode={theme?.mode} />

            {/* Menu bar */}
            <Menu
              placement={{ initial: 6, area: menu_placement }}
              container={menuContainerRef}
              className={cn('left-[60px] top-[60px] w-[300px]')}
            >
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
            </Menu>
            {/* END: Menu bar */}

            <div className="relative h-[70px] border-2 w-[30px] floating__btn overflow-hidden rounded-[8px] py-[4px] flex flex-col items-center justify-center">
              <ScrollButton />
            </div>
          </div>
        </Collapsible>

        <Hero
          id={HERO_ID}
          ref={heroContentRef}
          mainTitle={<div className="w-full">Ebong Okposong</div>}
          subTitle={
            <>
              <ul
                className="list list-row "
                style={{ justifyContent: 'center' }}
              >
                <li className="list-item font-bold">
                  <TypeWriter
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
            </>
          }
          contact_links={CONTACT_LINKS}
        >
          <div className="boxed_layout flex-column flex items-center">
            <div className="flex flex-row justify-evenly w-full items-center mt-[100px] flex-wrap gap-2">
              <SpanLink
                className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                title="Go to projects"
                onClick={() => onPageChange(PAGES.PROJECT)}
              >
                Projects
              </SpanLink>
              <SpanLink
                className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                onClick={() => onPageChange(PAGES.WORK_EXP)}
              >
                Work Experience
              </SpanLink>
              <SpanLink
                className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                onClick={() => onPageChange(PAGES.BLOG)}
              >
                Blog
              </SpanLink>
            </div>
          </div>
        </Hero>

        {/* Tab*/}
        <main
          ref={mainContentRef}
          id={MAIN_CONTENT_ID}
          className="z-[2] relative hidden_scrollbar"
        >
          <Tab>
            {() => (
              <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                <div className="flex z-[1] flex-grow  overflow-y-auto hidden_scrollbar md:flex-nowrap flex-wrap">
                  <div className="z-0 relative w-full h-full overflow-y-auto hidden_scrollbar">
                    <RenderTabContent />
                    {/* Keep scrolling section*/}
                    <div className="scroll-indicator-container">
                      <div className="scroll-indicator">
                        <div className="">
                          <span>KEEP SCROLLING</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Tab>
        </main>
      </div>
    </>
  )
}

export default App
