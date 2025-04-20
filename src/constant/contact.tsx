import devToLogo from '@/assets/devto-logo.svg'
import { ReactElement } from 'react'
import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri'

export const LINKS = {
  cv: 'https://docs.google.com/document/d/1fHUQRdyf2RzSXUNME7ASAehzVarY-Fl2541if2EUQyI/edit?usp=sharing',
  github: 'https://github.com/lil-armstrong',
  linkedin: 'https://linkedin.com/in/lil-armstrong',
  dev_to: 'https://dev.to/lilarmstrong',
  phone: 'tel:+2348109875593',
}

export const CONTACT_LINKS: ReactElement[] = [
  <a
    rel="noreferrer"
    target="_blank"
    href={LINKS?.github}
    title="Github account"
    aria-label="Visit and connect with me via Github"
  >
    <RiGithubLine aria-label="github icon" />
  </a>,
  <a
    rel="noreferrer"
    target="_blank"
    href={LINKS?.dev_to}
    title="Dev.to account"
    aria-label="Visit and connect with me on Dev.to"
  >
    <img
      src={devToLogo}
      alt="dev.to logo"
      style={{ width: 45, fontSize: 12 }}
    />
  </a>,
  <a
    rel="noreferrer"
    target="_blank"
    aria-label="Visit and connect with me via linkedin"
    href={LINKS?.linkedin}
    title="Linkedin account"
  >
    <RiLinkedinFill aria-label="Linkedin icon" />
  </a>,
]
