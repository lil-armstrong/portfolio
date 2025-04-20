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
import { ContentStyled } from './style'
import styles from './style.module.scss'

export function ContactMe() {
  return (
    <>
      <ContainerStyled>
        <SectionHeaderStyled>
          <SectionHeaderTitleStyled>Contact</SectionHeaderTitleStyled>
        </SectionHeaderStyled>

        <InnerContainerStyled>
          <ContentStyled className="flex flex-col self-center w-full h-full justify-center gap-[20px] items-center py-[30px]">
            <img src={MePng} alt="Ebong, Okposong" width={200} />
            <header className="flex flex-col gap-x-[10px] my-[30px] grow items-center justify-center w-full mx-[30px]">
              <p className={cl(styles.title, 'text-center mb-4')}>
                Want to get in touch?
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
