import {
  AboutMe,
  Certifications,
  ContactMe,
  Menu,
  Projects,
  Skills,
  Tab,
  WorkExperience,
} from '@/components'
import * as ThemeContext from '@/context/theme.context'
import React, { createRef, useContext, useEffect } from 'react'
import { RiGithubLine, RiLinkedinFill, RiPhoneFill } from 'react-icons/ri'
// import FixedRightPanel from '@/components/FixedPanel'
import Hero from '@/components/Hero/hero'
import '@/styles/index.scss'
import { PAGES } from '@/types/pages'
import useAppCxt from './hook/app.hook'
import '@fontsource/bakbak-one'
import '@fontsource/anonymous-pro'
import '@fontsource/alexandria/200.css'
import '@fontsource/alexandria/300.css'
import 'animate.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { BiSun, BiMoon } from 'react-icons/bi'
import TypeWriter from './components/TypeWriter/type_writer'
import ThemeSwitcher from './components/ThemeSwitcher/theme_switcher'
// import '@fontsource/black-han-sans'
export const LINKS = {
  cv: 'https://docs.google.com/document/d/1fHUQRdyf2RzSXUNME7ASAehzVarY-Fl2541if2EUQyI/edit?usp=sharing',
  github: 'https://github.com/lil-armstrong',
  linkedin: 'https://linkedin.com/in/lil-armstrong',
  phone: 'tel:+2348109875593',
}

export const CONTACT_LINKS: any[] = [
  <>
    <a rel="noreferrer" target="_blank" href={LINKS?.github}>
      <RiGithubLine />
    </a>
  </>,
  <>
    <a rel="noreferrer" target="_blank" href={LINKS?.linkedin}>
      <RiLinkedinFill />
    </a>
  </>,
  <>
    <a rel="noreferrer" href={LINKS?.phone}>
      <RiPhoneFill />
    </a>
  </>,
]

const tab: Record<PAGES, { title: JSX.Element; content: React.FC }> = {
  [PAGES.ABOUT]: {
    title: <>About Me</>,
    content: AboutMe,
  },
  [PAGES.WORK_EXP]: {
    title: <>Work Experience</>,
    content: WorkExperience,
  },
  [PAGES.SKILL]: {
    title: <>Skills</>,
    content: Skills,
  },
  [PAGES.CERT]: {
    title: <>Certifications</>,
    content: Certifications,
  },
  [PAGES.PROJECT]: {
    title: <>Projects</>,
    content: Projects,
  },
  [PAGES.CONTACT]: {
    title: <>Contact</>,
    content: ContactMe,
  },
}

function disableUp(scroll_height?: number) {
  scroll_height = scroll_height
    ? scroll_height
    : document.documentElement.scrollTop
  return !Boolean(scroll_height)
}

function disableDown(scroll_height?: number) {
  scroll_height = scroll_height
    ? scroll_height
    : document.documentElement.scrollTop
  const max_y = document.documentElement.scrollHeight
  console.log({ scroll_height, max_y })
  return scroll_height === max_y
}

// MAIN APP
function App() {
  const theme = useContext(ThemeContext.ThemeCtx)
  const scrollRef = createRef<HTMLDivElement>()
  const scroll_height = document.documentElement.scrollTop - window.innerHeight
  const appCxt = useAppCxt(),
    activeTab = appCxt.active
  const [state, set] = React.useState<{
    scroll_height: number
    disableUp: boolean
    disableDown: boolean
  }>({
    scroll_height: document.documentElement.scrollTop,
    disableDown: disableDown(scroll_height),
    disableUp: disableUp(scroll_height),
  })

  useEffect(() => {
    const body = document?.body
    if (theme && body) {
      body?.setAttribute('data-theme', theme?.currentValue)
    }
  }, [theme])

  const RenderTabContent = React.useCallback(() => {
    const value = tab[activeTab]
    const key = activeTab

    return (
      <div className="h-full flex-grow m-auto">
        <value.content key={`tab_body_${key}`} />
      </div>
    )
  }, [activeTab])

  const handleScrollUp = React.useCallback(() => {
    const scroll_height =
      document.documentElement.scrollTop - window.innerHeight
    // window.scroll({
    //   top: scroll_height,
    // })

    set((prev) => ({
      ...prev,
      scroll_height,
      disableDown: disableDown(scroll_height),
      disableUp: disableUp(scroll_height),
    }))
    window.scrollBy(
      0,
      -(window.innerHeight + (window.orientation > 1 ? 200 : 0))
    )
  }, [])

  const handleScrollDown = React.useCallback(() => {
    const top = document.documentElement.scrollTop + window.innerHeight

    set((prev) => ({
      ...prev,
      scroll_height: document.documentElement.scrollTop,
      disableDown: disableDown(top),
      disableUp: disableUp(top),
    }))

    window.scrollBy(0, window.innerHeight)
  }, [])

  return (
    <div className="block relative">
      {/* <FixedRightPanel /> */}
      <div className="fixed right-[30px] bottom-[60px] z-[10]">
        <div className="flex flex-col gap-[10px] items-center">
          <ThemeSwitcher />
          <Menu />
          <div
            id="scroll__btn"
            className="relative h-[100px]  w-[50px] shadow-sm overflow-hidden rounded-[25px] py-[4px]   flex flex-col items-center justify-center"
          >
            <button
              disabled={state.disableUp}
              onClick={handleScrollUp}
              className="text-[20px] flex items-center justify-center py-[8px] absolute left-0 border-b border-solid border-[#0000001e] top-[0] w-full h-[50px]"
            >
              <AiOutlineUp />
            </button>
            <button
              disabled={state.disableDown}
              onClick={handleScrollDown}
              className="text-[20px] flex items-center justify-center py-[8px] absolute left-0 bottom-[0]   w-full h-[50px]"
            >
              <AiOutlineDown />
            </button>
          </div>
        </div>
      </div>

      <div className="z-[1] sticky top-0">
        <Hero
          mainTitle={
            <div className="w-full">
              <TypeWriter speed={1000} text="Ebong Okposong" />
            </div>
          }
          subTitle={
            <>
              <ul
                className="list list-row "
                style={{ justifyContent: 'center' }}
              >
                <li className="list-item font-bold">
                  Software Engineer/Architect
                </li>
              </ul>
            </>
          }
          contact_links={CONTACT_LINKS}
        />
      </div>
      {/* Tab*/}
      <main id="main-content" className="z-[2] relative">
        <Tab>
          {({ activeIndex, setActiveIndex }) => {
            return (
              <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                {/* <header className="tab_head z-[3] top-[0px] sticky max-w-full">
                  <ul className="flex overflow-x-auto">
                    {Object.entries(tab).map(([k, v], idx) => (
                      <li
                        className="badge flex-grow  cursor-pointer"
                        data-active={k === activeTab}
                        data-hoverable={'true'}
                        key={`tab_head_${k}_${idx}`}
                        onClick={() => {
                          setAppCxt &&
                            setAppCxt((prev) => ({
                              ...prev,
                              active: k as PAGES,
                            }))
                          if (scrollRef.current) {
                            scrollRef.current?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            })
                          }
                        }}
                      >
                        {v.title}
                      </li>
                    ))}
                  </ul>
                </header> */}

                <div
                  ref={scrollRef}
                  className="flex z-[1] flex-grow  overflow-y-auto hidden_scrollbar md:flex-nowrap flex-wrap"
                >
                  {/* Tab content screens*/}
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

          {/* <button className="scroll-navigator round-btn">
                    <RiArrowDownCircleLine />
                  </button> */}
        </div>
      </div>
    </div>
  )
}

export default App
