import MePng from '@/assets/me.png'
import { forwardRef } from 'react'
import BookACall from '../BookCall'
import MotionSensitiveImage from '../MotionSensitiveImage/MotionSensitiveImage'
import './style.scss'
import { ContainerStyled, HeaderContainerStyled } from './styled'
import { IPropInterface } from './type'

/**
 * A React functional component that serves as a hero section for a portfolio or webpage.
 * It displays a main title, subtitle, an image, contact links, and optional children content.
 * The component is wrapped with `forwardRef` to allow passing a ref to the root container.
 */
const Hero = forwardRef<HTMLDivElement, IPropInterface>(
  (
    { mainTitle = null, subTitle = null, contactLinks = [], children, id },
    ref
  ) => {
    return (
      <ContainerStyled id={id} ref={ref}>
        <figure className="me_passport" aria-label="Ebong, Okposong hero image">
          <MotionSensitiveImage src={MePng} alt="Ebong, Okposong" />
        </figure>

        <HeaderContainerStyled>
          <header
            className=""
            style={{
              display: 'flex',
              margin: '0 auto',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h1 className="hero_title select-none">
              <div className="before-title"></div>
              {mainTitle}
              <div className="after-title"></div>
            </h1>
            <div className="hero_subtitle select-none">{subTitle}</div>
          </header>

          <ul className="list contact_links">
            {contactLinks.map((content, idx) => (
              <li key={idx} className="list-item social_icon">
                {content}
              </li>
            ))}
          </ul>

          <BookACall />
        </HeaderContainerStyled>

        {children}
      </ContainerStyled>
    )
  }
)

export default Hero
