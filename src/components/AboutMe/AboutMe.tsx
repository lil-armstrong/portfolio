import { PAGES } from '@/types/pages'
import { LINKS } from '@/types/links'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import useAppCxt from '@/hook/app.hook'
import cl from 'classnames'
import { ContainerStyled } from '../common/styled'

export function AboutMe() {
  const setPage = useAppCxt().setPage

  return (
    <>
      <ContainerStyled>
        <h3 className="section-heading">About Me</h3>
        <section className="boxed_layout">
          {/* ABOUT */}
          <section className="flex-grow flex flex-col py-[30px]  justify-center">
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
                  <strong className="highlight">
                    React Native, Javascript, Nodejs, React, Vue, Python, C
                  </strong>{' '}
                  etc. with experience in both{' '}
                  <em className="highlight">native</em> and
                  <em className="highlight">cross-platform app development</em>.
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
                {/* <a
                  href={`#${PAGES.CONTACT}`}
                  className={cl(
                    'nav-link',
                    'hover:underline underline-offset-4 decoration-dashed'
                  )}
                  onClick={() => setPage && setPage(PAGES.CONTACT)}
                >
                  Reach out
                </a> */}
              </p>
            </div>
            {/*Button*/}
            <div className="flex mt-[20px] flex-row-reverse mb-[70px] flex-wrap justify-evenly w-full items-center gap-[30px]">
              <a
                href={LINKS?.CV}
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg "
              >
                Download CV
              </a>
              <span className="flex-grow text-center">OR</span>
              <button
                // href={`#${PAGES.CONTACT}`}
                // target="_blank"
                // rel="noreferrer"
                className="btn btn-lg"
                onClick={() => setPage && setPage(PAGES.CONTACT)}
              >
                📫 Reach out
              </button>
            </div>
          </section>
        </section>
      </ContainerStyled>
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
