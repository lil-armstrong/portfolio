import { CONTACT_LINKS } from 'src/App'

export default function ContactMe() {
  return (
    <section className="flex-grow  flex flex-col">
      <section className="boxed_layout  w-full  flex flex-col items-center text-center pt-[30px] md:pt-[100px]">
        <header className="px-[30px] flex-grow">
          <h3 className="section_title">CONTACT</h3>
          <p>I am open to new opportunities</p>
          <ul className="flex flex-wrap justify-center mt-4 gap-[30px]">
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

        <div className="flex justify-center mt-[30px]">
          <button type="submit" className="btn btn-outline btn-lg ">
            <a href="mailto:oebong1@gmail.com">Get in touch</a>
          </button>
        </div>
      </section>
    </section>
  )
}
