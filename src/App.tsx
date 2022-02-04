import './App.scss'
import Hero from './Hero'
import FixedRightPanel from './FixedPanel'
import Skills from './Skills/Skills'
import Projects from './Projects/Project'
import { RiGithubLine, RiPhoneFill, RiLinkedinFill } from 'react-icons/ri'
import { ThemeCtx } from './context/ThemeContext'
import { useContext, useEffect } from 'react'
import Tab from './Tab'
import WorkExperience from './WorkExperience'
import Certifications from './Certifications'

const LINKS = {
  cv: 'https://docs.google.com/document/d/1fHUQRdyf2RzSXUNME7ASAehzVarY-Fl2541if2EUQyI/edit?usp=sharing',
  github: 'https://github.com/lil-armstrong',
  linkedin: 'https://linkedin.com/in/lil-armstrong',
  phone: 'tel:08109875593',
}
const CONTACT_LINKS: any[] = [
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
  <>Work Experience</>,
  <>Skills & Interest</>,
  <>Projects</>,
  <>Certifications</>,
]
const tabContent = [<WorkExperience />, <Skills />, <Projects />, <Certifications/>]

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
          <div className="flex-grow sticky top-0 z-[2] meta_box-left h-full   hidden_scrollbar">
            {/* ABOUT */}
            <section className="flex-grow flex flex-col w-full">
              <div className="boxed_layout h-full flex flex-col  pt-[30px] md:pt-[100px] pb-[30px]">
                {/* ABOUT */}
                <section className="flex-grow px-[30px]">
                  <header className=" ">
                    <h3 className="section_title">ABOUT</h3>
                  </header>
                  <div className="overflow-y-auto  hidden_scrollbar">
                    <p className="lead ">
                      I am a motivated and skilled individual seeking new
                      opportunities in IT support and software development. I
                      love <span className="tag">simplicity</span>,{' '}
                      <span className="tag">elegance</span> and{' '}
                      <span className="tag">clarity</span> and have experience
                      working professionally as a freelance{' '}
                      <span className="tag">visual designer</span>,{' '}
                      <span className="tag">Project manager</span> &{' '}
                      <span className="tag">web application developer</span>.
                    </p>
                    <p className="lead ">
                      By completing several online courses, I have gained
                      practical ample hands-on skills and training in{' '}
                      <span className="tag">business</span>,{' '}
                      <span className="tag">IT support</span>,{' '}
                      <span className="tag">computer networking</span>,{' '}
                      <span className="tag">project management</span> etc. I am
                      passionate about continuously learning and I am curious
                      about how I can help and add value to people by solving
                      their technical problems.
                    </p>

                    <p>
                      I am currently taking on contract and freelance projects.{' '}
                    </p>
                  </div>
                </section>
                <div className="flex w-full justify-end self-end mt-[30px]">
                  <a
                    href={LINKS?.cv}
                    download
                    className="btn btn-primary btn-lg "
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </section>

            {/* CONTACT FORM */}
            <section className="flex-grow  flex flex-col">
              <section className="boxed_layout  w-full  flex flex-col pt-[30px] md:pt-[100px]">
                <header className="px-[30px] flex-grow">
                  <h3 className="section_title">CONTACT</h3>
                  <p>I am open to new opportunities</p>
                  <ul className="flex flex-wrap mt-4 gap-[30px]">
                    {CONTACT_LINKS?.map((item, idx) => (
                      <li className="social_icon" key={idx}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </header>

                {/* <form className="flex flex-col gap-[10px] my-[30px]">
                <div className="px-[15px] flex flex-col gap-[10px]">
                  <div className="flex md:flex-row flex-col gap-[10px] flex-wrap">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full name"
                      className="bg-gray-100 flex-1"
                      id="contact_input-full_name"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email_address"
                      className="bg-gray-100 flex-1"
                      id="contact_input-email_address"
                    />
                  </div>
                  <textarea
                    className="bg-gray-100"
                    name="message"
                    id="contact_input-message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                  ></textarea>
                </div>
              </form> */}

                <div className="flex justify-end mt-[30px]">
                  <button type="submit" className="btn btn-outline btn-lg ">
                    <a href="mailto:oebong1@gmail.com">Get in touch</a>
                  </button>
                </div>
              </section>
            </section>

            {/* FOOTER */}
            <footer className="mt-auto">
              <div className="boxed_layout text-center opacity-50 p-4 text-gray-400">
                Copyright &copy; 2022 | Ebong, Okposong
              </div>
            </footer>
          </div>

          {/* META_BOX RIGHT */}
          <Tab>
            {({ activeIndex, setActiveIndex }) => (
              <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                <header className="tab_head z-[1] top-[0px] sticky max-w-full">
                  <ul className="flex items-stretch overflow-x-auto hidden_scrollbar ">
                    {tabHead.map((item, idx) => (
                      <li
                        className="badge pill cursor-pointer"
                        data-active={idx === activeIndex}
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </header>
                <div className="flex h-full overflow-y-auto hidden_scrollbar flex-grow">
                  <div className="boxed_layout z-0 relative px-4">
                    {tabContent?.map((item, idx) => (
                      <div
                        className="pt-[60px] pb-[15px]"
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
