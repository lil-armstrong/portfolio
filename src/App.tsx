import Hero from './components/Hero'
import FixedRightPanel from './components/FixedPanel'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { RiGithubLine, RiPhoneFill, RiLinkedinFill } from 'react-icons/ri'
import { ThemeCtx } from './context/ThemeContext'
import { useContext, useEffect, useRef } from 'react'
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
    <a target="_blank" href={LINKS?.github}>
      <RiGithubLine />
    </a>
  </>,
  <>
    <a target="_blank" href={LINKS?.linkedin}>
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
  <AboutMe key="about-me"/>,
  <WorkExperience key="work-experience"/>,
  <Skills key="skills"/>,
  <Projects key="projects" />,
  <Certifications key="certifications"/>,
  <ContactMe key="contact-me"/>,
]

// MAIN APP
function App() {
  const theme = useContext(ThemeCtx)
  const scrollRef = useRef<HTMLDivElement | undefined>();

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
            {({ activeIndex, setActiveIndex }) => {

              return (
              <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                <header className="tab_head z-[3] top-[0px] sticky max-w-full">
                  <ul className="flex overflow-x-auto">
                    {tabHead.map((item, idx) => (
                      <li
                        className="badge flex-grow  cursor-pointer"
                        data-active={idx === activeIndex}
                        data-hoverable={'true'}
                        key={idx}
                        onClick={() => {
                          setActiveIndex(idx);
                          if(scrollRef.current){
                            scrollRef.current?.scrollIntoView({
                              behavior:'smooth',
                              block: 'start'
                            })
                          }
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </header>


                {/*@ts-ignore*/}
                <div ref={scrollRef} className="flex z-[1] flex-grow overflow-y-auto hidden_scrollbar md:flex-nowrap flex-wrap">
                  {/* Tab content screens*/}
                  <div className="z-0 relative w-full h-full overflow-y-auto hidden_scrollbar">
                    {tabContent?.map((item, idx) => (
                      <div
                        className="h-full flex-grow m-auto"
                        data-hide={idx !== activeIndex}
                        key={idx}
                      >
                        {item}
                      </div>
                    ))}
                  </div>



                  {/*Gallery section*/}
                  <div className="h-full lg:min-w-[450px] lg:py-[30px] py-[30px] flex flex-col items-center justify-center flex-auto" id="gallery">
                  {  /*<div className="flex-1 mb-auto flex-grow">
                      <div className=" ">

                      </div>
                    </div>*/}

                    <footer className="pt-[30px] m-auto flex flex-col text-sm text-center text-sm px-[25px] items-center justify-center opacity-[.75] font-medium">
                      <p>
                        Designed using Figma &amp; built
                        using Reactjs by yours truly.
                      </p>
                      <div className="font-normal opacity-[.95] text-center text-[10px]">
                        <p>Copyright &copy;. Since 2022.</p>
                        <p>Today is {new Date().toDateString()}</p>
                      </div>
                    </footer>
                  </div>
                </div>

                {/* Keep scrolling section*/}
                <div className="absolute z-[2] bottom-0 right-0 w-[16px] px-4 h-full">
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
            )}}
          </Tab>
        </div>
      </section>
    </div>
  )
}

export default App
