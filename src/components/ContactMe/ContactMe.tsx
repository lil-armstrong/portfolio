import MePng from '@/assets/me.png'
import { CONTACT_LINKS } from '@/constant/contact'
import { PAGES } from '@/types/pages'
import cl from 'classnames'
import {
  ContainerStyled,
  InnerContainerStyled,
  SectionFooterStyled,
  SectionHeaderStyled,
  SectionHeaderTitleStyled,
} from '../common/styled'
import SectionNavigationBar from '../SectionNavigation/SectionNavigation'
import { ContentStyled } from './styled'
import styles from './style.module.scss'
import { BiEnvelope, BiMessageX } from 'react-icons/bi'

export function ContactMe() {
  return (
    <>
      <ContainerStyled>
        <SectionHeaderStyled>
          <SectionHeaderTitleStyled>Contact</SectionHeaderTitleStyled>
        </SectionHeaderStyled>

        <InnerContainerStyled>
          <ContentStyled>
            <img src={MePng} alt="Ebong, Okposong" width={200} />
            <header className={cl(styles.header)}>
              <p className={cl(styles.title)}>Want to get in touch?</p>
              <p className={cl(styles.subtitle)}>
                You can reach out to me using the following social media
                platforms
              </p>
            </header>
            <ul className="list mt-[60px] gap-[30px]">
              {CONTACT_LINKS?.map((item, idx) => (
                <li className="list-item social_icon" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={cl(styles.button_container)}>
              <div className={cl(styles.buy_me_a_coffee)}>
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

              <button
                type="submit"
                className={cl(styles.button, 'btn btn-outline btn-lg')}
              >
                <BiEnvelope />
                <a href="mailto:oebong1@gmail.com">Get in touch</a>
              </button>

            </div>
          </ContentStyled>
        </InnerContainerStyled>

        <SectionFooterStyled>
          <SectionNavigationBar
            leftSlot={{ content: 'Blog', to: PAGES.BLOG }}
            rightSlot={{ content: null, to: undefined }}
          />
        </SectionFooterStyled>
      </ContainerStyled>
    </>
  )
}
export default ContactMe
