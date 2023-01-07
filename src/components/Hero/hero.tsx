import './style.scss'
import MePng from '@/assets/me.png'
import ImageSense from '../ImageSense/image_sense'

interface PropInterface {
  mainTitle: JSX.Element | string
  subTitle: JSX.Element | string
  contact_links: Array<JSX.Element | string>
}

export function Hero({
  mainTitle = <></>,
  subTitle = <></>,
  contact_links = [],
}: PropInterface) {
  return (
    <div id="page_hero">
      <figure className="me_passport">
        <ImageSense>
          <img src={MePng} alt="my passport" />
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
      </div>
    </div>
  )
}
export default Hero
