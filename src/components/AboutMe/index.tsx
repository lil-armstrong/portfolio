import { LINKS } from '../../App'

export function AboutMe() {
  return (
    <section className="boxed_layout flex-grow w-full">
      <div className="h-full flex flex-col p-[30px]">
        {/* ABOUT */}
        <section className="flex-grow  mb-auto">
          {/* <header className=" ">
            <h3 className="section_title">ABOUT</h3>
          </header> */}
          <div className="overflow-y-auto  hidden_scrollbar">
            <p className="lead ">
            Been working as a <span className="highlight">Full-stack Javascript</span> web application engineer for the past 6+ years. <span className=" highlight">Detail-oriented engineer</span> with experience using the following tools; <span className="highlight">Linux System</span>.
            Implement systems that require high throughput with <span className=" highlight">Nodejs as a back-end stack, React/Vuejs for the front-end, and MongoDB, SQLite, and PostgreSQL as databases</span>.
            Have a Bachelor's degree in Mathematics and Computer Science from the University of Portharcourt, Nigeria. A <span className=" highlight">self-starter</span> who has learned skills through online resources and books.
            Have a goal in IT to lead teams. Looking forward to building a <span className=" highlight">diverse portfolio</span> by completing and collaborating on more projects. Aiming for roles that transcend beyond a single IT department. <span className=" highlight">Looking forward to working with a team that is dynamic, and agile with a world-class challenge, that provides an opportunity for professional growth</span>.
            Interested in good food. Believes that nothing beats a good and healthy meal after a stressful activity. Love relaxing and interpreting logic, networking, and sharing knowledge via social media.


            </p>


            <p>I am currently open to remote jobs</p>
          </div>
        </section>
        {/*Button*/}
        <div className="flex w-full mt-[30px]">
          <a href={LINKS?.cv} download className="btn btn-primary btn-lg w-full ">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
