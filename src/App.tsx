import Hero from './components/Hero'
import FixedRightPanel from './components/FixedPanel'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Project'
import { RiGithubLine, RiPhoneFill, RiLinkedinFill } from 'react-icons/ri'
import { ThemeCtx } from './context/ThemeContext'
import { useContext, useEffect } from 'react'
import Tab from './components/Tab'
import WorkExperience from './components/WorkExperience'
import Certifications from './components/Certifications'
import { AboutMe } from './components/AboutMe/index'
import ContactMe from './components/ContactMe'

export const LINKS = {
  cv: 'https://docs.google.com/document/d/1fHUQRdyf2RzSXUNME7ASAehzVarY-Fl2541if2EUQyI/edit?usp=sharing',
  github: 'https://github.com/lil-armstrong',
  linkedin: 'https://linkedin.com/in/lil-armstrong',
  phone: 'tel:08109875593',
}
export const CONTACT_LINKS: any[] = [
  <>
    <a href={LINKS?.github}>
      <RiGithubLine />
    </a>
  </>,
  <>
    <a href={LINKS?.linkedin}>
      <RiLinkedinFill />
    </a>
  </>,
  <>
    <a href={LINKS?.phone}>
      <RiPhoneFill />
    </a>
  </>,
]

/* TAB */
const tabHead = [
  <>About me</>,
  <>Work Experience</>,
  <>Skills & Interest</>,
  <>Projects</>,
  <>Certifications</>,
  <>Contact me</>,
]
const tabContent = [
  <AboutMe />,
  <WorkExperience />,
  <Skills />,
  <Projects />,
  <Certifications />,
  <ContactMe />,
]

// MAIN APP
function App() {
  const theme = useContext(ThemeCtx)
  useEffect(() => {
    const body = document?.body
    if (theme && body) {
      body?.setAttribute('data-theme', theme?.currentValue)
    }
  }, [theme])
  return (
    <div className="">
      <FixedRightPanel />
      <Hero
        mainTitle={<div className="">Ebong Okposong</div>}
        subTitle={
          <>
            <ul className="list list-row " style={{ justifyContent: 'center' }}>
              <li className="list-item">Javascript Engineer</li>
            </ul>
          </>
        }
        contact_links={CONTACT_LINKS}
      />

      <section className="page_section relative z-[1]">
        <div className="flex flex-row flex-wrap-reverse meta_box lg:flex-nowrap">
          {/* META_BOX LEFT */}

          {/* META_BOX RIGHT */}
          <Tab>
            {({ activeIndex, setActiveIndex }) => (
              <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                <header className="tab_head z-[1] top-[0px] sticky max-w-full">
                  <ul className="flex  md:justify-evenly overflow-x-auto hidden_scrollbar ">
                    {tabHead.map((item, idx) => (
                      <li
                        className="badge flex-grow pill cursor-pointer"
                        data-active={idx === activeIndex}
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </header>
                <div className="flex h-full flex-grow overflow-y-auto hidden_scrollbar">
                  <div className="boxed_layout   z-0 relative">
                    {tabContent?.map((item, idx) => (
                      <div
                        className="py-[60px] h-full flex-grow px-6"
                        data-hide={idx !== activeIndex}
                        key={idx}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 right-0 w-[16px] px-4 h-full">
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
              </div>
            )}
          </Tab>
        </div>
      </section>
    </div>
  )
}

export default App
