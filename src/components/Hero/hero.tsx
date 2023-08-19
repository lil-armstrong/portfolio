import './style.scss'
import MePng from '@/assets/me.png'
import ImageSense from '../ImageSense/image_sense'
import { PropsWithChildren } from 'react'

interface PropInterface extends PropsWithChildren {
  mainTitle: JSX.Element | string
  subTitle: JSX.Element | string
  contact_links: Array<JSX.Element | string>
}

export function Hero({
  mainTitle = <></>,
  subTitle = <></>,
  contact_links = [],
  children
}: PropInterface) {
  return (
    <div id="page_hero">
      <figure className="me_passport" aria-label='Ebong, Okposong hero image'>
        <ImageSense>
          <img src={MePng} alt="Ebong, Okposong" />
        </ImageSense>
      </figure>

      <div className="hero_content">
        <header
          className="text-center"
          style={{
            display: 'flex',
            margin: '0 auto',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1 className="hero-title select-none">
            <div className="before-title"></div>
            {mainTitle}
            <div className="after-title"></div>
          </h1>
          <div className="subtitle select-none">{subTitle}</div>
        </header>

        <ul className="list items-end">
          {contact_links.map((content, idx) => (
            <li key={idx} className="list-item social_icon">
              {content}
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  )
}
export default Hero
