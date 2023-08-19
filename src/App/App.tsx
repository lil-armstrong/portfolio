import {
  AboutMe,
  Blog,
  Certifications,
  ContactMe,
  Menu,
  Projects,
  Skills,
  Tab,
  ThemeSwitcher,
  TypeWriter,
  WorkExperience,
} from '@/components'
import Hero from '@/components/Hero/hero'
import { CONTACT_LINKS } from '@/constant/contact'
import * as ThemeContext from '@/context/theme.context'
import '@/styles/index.scss'
import { PAGES } from '@/types/pages'
import '@fontsource/alexandria/200.css'
import '@fontsource/alexandria/300.css'
import '@fontsource/anonymous-pro'
import '@fontsource/bakbak-one'
import 'animate.css'
import cn from 'classnames'
import React, { createRef, useContext, useEffect } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { Poppable } from 'webrix/components'
import useAppCxt from '../hook/app.hook'
import { NavLink } from './styled'

const GAP = 5

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

// MAIN APP
function App() {
  const theme = useContext(ThemeContext.ThemeCtx)
  const scrollRef = createRef<HTMLDivElement>()
  const currentPageRef = React.useRef<PAGES>()
  const appCxt = useAppCxt(),
    activePage = appCxt.active

  useEffect(() => {
    const body = document?.body
    if (theme && body) {
      body?.setAttribute('data-theme', theme?.currentValue)
    }
  }, [theme])

  useEffect(() => {
    const cpr = currentPageRef.current,
      sr = scrollRef.current
    if (activePage && sr) {
      if (cpr) {
        if (cpr != activePage) {
          currentPageRef.current = activePage
          scrollRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      } else {
        currentPageRef.current = activePage
        scrollRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }, [activePage, scrollRef])

  const RenderTabContent = React.useCallback(() => {
    const page = activePage ? activePage : PAGES.ABOUT

    const value = tab[page]
    const key = page

    return (
      <div className="h-full flex-grow m-auto">
        <value.content key={`tab_body_${key}`} />
      </div>
    )
  }, [activePage])

  const handleScrollUp = React.useCallback(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }, [])

  const handleScrollDown = React.useCallback(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: window.innerHeight,
    })
  }, [])

  const ScrollButton = React.useCallback(() => {
    const [isTopDisabled, setDisableTop] = React.useState(window.scrollY === 0)

    const [isBottomDisabled, setDisableBottom] = React.useState(
      window.scrollY !== 0 &&
        window.scrollY >=
          Math.abs(
            document.body.scrollHeight -
              document.body.clientHeight -
              document.body.scrollTop
          )
    )

    React.useEffect(() => {
      const onScroll = () => {
        setDisableTop(window.scrollY === 0)
        setDisableBottom(
          window.scrollY >=
            Math.abs(
              document.body.scrollHeight -
                document.body.clientHeight -
                document.body.scrollTop
            )
        )
      }
      window.addEventListener('scroll', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [])
    return (
      <>
        <button
          disabled={isTopDisabled}
          onClick={handleScrollUp}
          className="text-[20px] flex items-center justify-center py-[8px] absolute left-0 border-b border-solid border-[#0000002c] top-[0] w-full h-[50px]"
        >
          <AiOutlineUp />
        </button>
        <button
          disabled={isBottomDisabled}
          onClick={handleScrollDown}
          className="text-[20px] flex items-center justify-center py-[8px] absolute left-0 bottom-[0]   w-full h-[50px]"
        >
          <AiOutlineDown />
        </button>
      </>
    )
  }, [])

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
  const menu_container_ref = React.createRef<HTMLDivElement>()

  return (
    <>
      <div className="block relative">
        {/* <FixedRightPanel /> */}
        <div
          ref={menu_container_ref}
          className="fixed left-[30px] top-[35px] z-[10]"
        >
          <div className="flex flex-col gap-[10px] items-center">
            <ThemeSwitcher />

            {/* Menu bar */}
            <Menu
              placement={{ initial: 6, area: menu_placement }}
              container={menu_container_ref}
              className={cn('left-[90px] top-[100px] w-[370px]')}
            >
              <div>
                {Object.entries(tab).map(([id, { title }]) => (
                  <Menu.Item
                    key={id}
                    text={title && title}
                    title={id}
                    onClick={() => {
                      appCxt.setPage(id as PAGES)
                    }}
                    active={isMenuItemActive(id as PAGES)}
                  />
                ))}
              </div>
            </Menu>
            {/* END: Menu bar */}

            <div
              id="scroll__btn"
              className="relative h-[100px]  w-[50px] floating__btn overflow-hidden rounded-[25px] py-[4px] flex flex-col items-center justify-center"
            >
              <ScrollButton />
            </div>
          </div>
        </div>

        <div className="z-[1] sticky top-0">
          <Hero
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
                <NavLink
                  href={`#${PAGES.PROJECT}`}
                  className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                  title="Go to projects"
                  onClick={() => appCxt.setPage(PAGES.PROJECT)}
                >
                  Projects
                </NavLink>
                <NavLink
                  href={`#${PAGES.WORK_EXP}`}
                  className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                  onClick={() => appCxt.setPage(PAGES.WORK_EXP)}
                >
                  Work Experience
                </NavLink>
                <NavLink
                  href={`#${PAGES.BLOG}`}
                  className={cn('nav-link', 'px-4 flex-grow-0 text-center')}
                  onClick={() => appCxt.setPage(PAGES.BLOG)}
                >
                  Blogs
                </NavLink>
              </div>
            </div>
          </Hero>
        </div>
        {/* Tab*/}
        <main id="main-content" className="z-[2] relative hidden_scrollbar">
          <Tab>
            {({ activeIndex, setActiveIndex }) => {
              return (
                <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                  <div
                    ref={scrollRef}
                    className="flex z-[1] flex-grow  overflow-y-auto hidden_scrollbar md:flex-nowrap flex-wrap"
                  >
                    <div className="z-0 relative w-full h-full overflow-y-auto hidden_scrollbar">
                      <RenderTabContent />
                    </div>
                  </div>
                </div>
              )
            }}
          </Tab>
        </main>
        {/* Keep scrolling section*/}
        <div className="scroll-indicator-container">
          <div className="scroll-indicator">
            <div className="">
              <span>KEEP SCROLLING</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
