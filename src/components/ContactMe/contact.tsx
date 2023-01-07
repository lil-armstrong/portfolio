import { CONTACT_LINKS } from '@/App'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'

export function ContactMe() {
  return (
    <>
      <section className="flex-grow h-screen relative pb-[60px] items-center justify-center flex flex-col">
        <h3 className="section-heading">Contact</h3>
        <section className="boxed_layout">
          <header className="flex flex-col grow items-center justify-center w-full">
            <p className="text-[4rem]">👋</p>
            <p className="prose">
              Nice to meet you! Reach out to me using the following
            </p>
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

          <div className="flex w-full justify-center gap-[20px] items-center my-[30px]">
            <button type="submit" className="btn btn-outline btn-lg">
              <a href="mailto:oebong1@gmail.com">Get in touch</a>
            </button>
          </div>
        </section>
      </section>
      <div className="absolute bottom-0 w-full left-0">
        <BottomNavigation
          leftSlot={{ content: 'Project', to: PAGES.PROJECT }}
          rightComponent={
            <div className="p-[8px] flex-grow justify-end items-center flex">
              <a
                href="https://www.buymeacoffee.com/lilarmstrong"
                target="_blank"
                rel="noreferrer"
                data-name="bmc-button"
                data-slug="lilarmstrong"
                data-color="#000000"
                data-emoji=""
                data-font="Cookie"
                data-text="Buy me a coffee"
                data-outline-color="#ffffff"
                data-font-color="#ffffff"
                data-coffee-color="#FFDD00"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  style={{ height: '40px', flexGrow: 1 }}
                />
              </a>
            </div>
          }
        />
      </div>
    </>
  )
}
export default ContactMe
