import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri'

export const LINKS = {
  cv: 'https://docs.google.com/document/d/1fHUQRdyf2RzSXUNME7ASAehzVarY-Fl2541if2EUQyI/edit?usp=sharing',
  github: 'https://github.com/lil-armstrong',
  linkedin: 'https://linkedin.com/in/lil-armstrong',
  dev_to: 'https://dev.to/lilarmstrong',
  phone: 'tel:+2348109875593',
}

export const CONTACT_LINKS: any[] = [
  <a
    rel="noreferrer"
    target="_blank"
    href={LINKS?.github}
    title="Github account"
  >
    <RiGithubLine />
  </a>,
  <a
    rel="noreferrer"
    target="_blank"
    href={LINKS?.dev_to}
    title="Dev.to account"
  >
    <img src={'/dev_to_logo.png'} alt="dev.to" style={{ width: 35 }} />
  </a>,
  <a
    rel="noreferrer"
    target="_blank"
    href={LINKS?.linkedin}
    title="Linkedin account"
  >
    <RiLinkedinFill />
  </a>,
  // <>
  //   <a rel="noreferrer" href={LINKS?.phone}>
  //     <RiPhoneFill />
  //   </a>
  // </>,
]
