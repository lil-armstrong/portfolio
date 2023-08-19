import { CONTACT_LINKS } from '@/constant/contact'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import styles from './style.module.scss'
import cl from 'classnames'
import { ContainerStyled } from '../common/styled'

export function ContactMe() {
  return (
    <>
      <ContainerStyled>
        <h3 className="section-heading">Contact</h3>
        <section className="boxed_layout">
          <div className="flex flex-col self-center w-full h-full justify-center gap-[20px] items-center my-[30px]">
            <header className="flex flex-col gap-x-[10px] my-[30px] grow items-center justify-center w-full mx-[30px]">
              <p className="text-[4rem]">👋</p>
              <p className={cl(styles.title, 'text-center mb-4')}>
                Nice to meet you!
              </p>
              <p>Do reach out to me using the following</p>
              <ul className="list mt-[60px] gap-[30px]">
                {CONTACT_LINKS?.map((item, idx) => (
                  <li className="list-item social_icon" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </header>
            <button type="submit" className="btn btn-outline btn-lg">
              <a href="mailto:oebong1@gmail.com">Get in touch</a>
            </button>
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
                  style={{ height: '70px', flexGrow: 1 }}
                />
              </a>
            </div>
          </div>

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
        </section>
      </ContainerStyled>
      <div className="absolute bottom-0 w-full left-0">
        <BottomNavigation
          leftSlot={{ content: 'Project', to: PAGES.PROJECT }}
          rightComponent={<></>}
        />
      </div>
    </>
  )
}
export default ContactMe
