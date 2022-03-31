import { LINKS } from '../../App'

export function AboutMe() {
  return (
    <section className="flex-grow flex flex-col w-full h-full">
      <div className="h-full flex flex-col pb-[30px]">
        {/* ABOUT */}
        <section className="flex-grow px-[15px]">
          <header className=" ">
            <h3 className="section_title">ABOUT</h3>
          </header>
          <div className="overflow-y-auto  hidden_scrollbar">
            <p className="lead ">
              I am a motivated and skilled individual seeking new opportunities
              in IT support and software development. I love{' '}
              <span className="tag">simplicity</span>,{' '}
              <span className="tag">elegance</span> and{' '}
              <span className="tag">clarity</span> and have experience working
              professionally as a freelance{' '}
              <span className="tag">visual designer</span>,{' '}
              <span className="tag">Project manager</span> &{' '}
              <span className="tag">web application developer</span>.
            </p>
            <p className="lead ">
              By completing several online courses, I have gained practical
              ample hands-on skills and training in{' '}
              <span className="tag">business</span>,{' '}
              <span className="tag">IT support</span>,{' '}
              <span className="tag">computer networking</span>,{' '}
              <span className="tag">project management</span> etc. I am
              passionate about continuously learning and I am curious about how
              I can help and add value to people by solving their technical
              problems.
            </p>

            <p>I am currently taking on remote contract and freelance jobs.</p>
          </div>
        </section>
        <div className="flex w-full justify-center my-[30px]">
          <a href={LINKS?.cv} download className="btn btn-primary btn-lg ">
            Download CV
          </a>
        </div>
        <footer className="py-[30px] flex flex-col items-center justify-center opacity-[.5]">
          <p>
            This is project was designed using Figma &amp; built using Reactjs
            by yours truly.
          </p>
          <p>Copyright &copy;. Since 2022. Today is {new Date().toDateString()}</p>
        </footer>
      </div>
    </section>
  )
}
