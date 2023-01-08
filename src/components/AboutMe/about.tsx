import { PAGES } from '@/types/pages'
import { LINKS } from '@/types/links'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
// import MePng from '@/assets/me.png'
import useAppCxt from '@/hook/app.hook'
import cl from 'classnames'

export function AboutMe() {
  const setPage = useAppCxt().setPage

  return (
    <>
      <div className="flex flex-col h-screen relative flex-grow ">
        <h3 className="section-heading">About Me</h3>
        <section className="boxed_layout">
          {/* ABOUT */}
          <section className="mt-[100px] flex-grow flex flex-col items-center justify-center">
            {/* <figure className="lg:w-[200px]  m-[8px] overflow-hidden">
              <img
                src={MePng}
                alt="my passport"
                className="w-full max-w-[200px]"
              />
            </figure> */}
            <div className="">
              <p className="lead prose">
                <span className="block pb-2 pt-4 text-2xl">
                  👋 Nice to meet you.
                </span>
                <span className="block pt-[16px]">
                  I build applications for the{' '}
                  <em className="highlight">web</em> and{' '}
                  <em className="highlight">mobile</em>
                </span>
                <span className="block">
                  Software engineer with a passion for solving complex problems
                  and creating innovative solutions. Strong background in
                  mobile, web and command line app development. Passionate about
                  creating <strong className="highlight">intuitive</strong> and
                  <strong className="highlight">user-friendly</strong>{' '}
                  applications.
                </span>
                <span className="block">
                  Proficient in a range of programming languages and frameworks,
                  such as{' '}
                  <code className="highlighted">
                    React Native, Javascript, Nodejs, React, Vue, Python, C
                  </code>{' '}
                  etc. with experience in both native and cross-platform app
                  development.
                </span>
                <span className="block">
                  Skilled in{' '}
                  <strong className="highlight">design thinking</strong> and{' '}
                  <strong className="highlight">agile</strong> methodologies,
                  with a focus on delivering high-quality products that meet the
                  needs of users.{' '}
                  <a
                    href={`#${PAGES.SKILL}`}
                    className="nav-link hover:underline underline-offset-4 decoration-dashed"
                    onClick={() => setPage && setPage(PAGES.SKILL)}
                  >
                    Find out more
                  </a>
                </span>
                <span className="block">
                  Proven track record in the fintech, agriculture, ecommerce,
                  and the retail industries. Proven ability to work
                  collaboratively in fast-paced, high-stress environments.
                  Seeking a challenging, dynamic and rewarding role where I can
                  leverage my technical expertise and problem-solving skills to
                  drive business growth
                </span>
                <a
                  href={`#${PAGES.CONTACT}`}
                  className={cl(
                    'nav-link',
                    'hover:underline underline-offset-4 decoration-dashed'
                  )}
                  onClick={() => setPage && setPage(PAGES.CONTACT)}
                >
                  📫 Reach out
                </a>
              </p>
            </div>
          </section>
          {/*Button*/}
          <a
            href={LINKS?.CV}
            download
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg mb-[70px]"
          >
            Download CV
          </a>
        </section>
      </div>
      <div className="absolute bottom-0 w-full text-center left-0">
        <BottomNavigation
          rightSlot={{
            content: 'Work Experience',
            to: PAGES.WORK_EXP,
          }}
        />
      </div>
    </>
  )
}

export default AboutMe
