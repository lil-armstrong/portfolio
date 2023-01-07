import { useState, useEffect, useRef } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import projects from '@/.data/projects'
import ReactMarkdown from 'react-markdown'
import { resolveAsset } from '../../helper'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import './style.scss'

interface ProjectDataInterface {
  name: string
  roles: Array<string>
  timeline: string
  description: string
  link?: string
  client?: string
  client_url?: string
  image_url?: string
}

export function Projects() {
  const isMounted = useRef<boolean>(true)

  useEffect(() => {
    if (!isMounted?.current) isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    // <ul className="flex flex-col gap-y-[30px] pb-[20px]">
    <div className="flex flex-col flex-grow h-full">
      <h3 className="section-heading">Projects</h3>

      <div className="boxed_layout">
        <ul className="grid-container">
          {projects?.map((data: ProjectDataInterface, idx: number) => {
            return (
              <li key={idx} className="grid-child">
                <ProjectCard data={data} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="absolute w-full left-0 bottom-0">
        <BottomNavigation
          leftSlot={{ content: 'Certifications', to: PAGES.CERT }}
          rightSlot={{
            content: 'Contact',
            to: PAGES.CONTACT,
          }}
        />
      </div>
    </div>
  )
}

function ProjectCard(props: { data: ProjectDataInterface }): JSX.Element {
  const [image, setImage] = useState('https://via.placeholder.com/50')
  const {
    name,
    roles,
    timeline,
    description,
    client,
    client_url,
    link,
    image_url,
  } = props.data

  useEffect(() => {
    ;(async () => {
      const image = await resolveAsset(image_url)
      setImage(image)
    })()
  }, [image_url])

  return (
    <div className={['card h-full min-w-[300px] flex-grow project '].join(' ')}>
      <div className="flex-grow flex flex-col h-full">
        <div className="flex gap-[15px]">
          <div className="rounded-lg overflow-hidden w-[50px] h-[50px]  bg-opacity-50 text-[8px] justify-center items-center text-center flex flex-column">
            <img
              // @ts-ignore
              src={image}
              alt="Logo"
            />
          </div>
          <div className="ml-[8px] w-full">
            <p className="name text-capitalize">{name}</p>
            <ul className="inline-flex flex-wrap gap-[8px] meta">
              {client ? (
                <li className="timeline text-gray-500" title={timeline}>
                  {client_url ? (
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={client_url}
                      title={`${client} website`}
                    >
                      {client}
                    </a>
                  ) : (
                    client
                  )}
                </li>
              ) : null}
              <li className="timeline text-gray-700" title={timeline}>
                {timeline}
              </li>
            </ul>
          </div>
        </div>
        <div className="description  flex-grow">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        <ul className="roles">
          {roles?.map((role, roleIdx) => (
            <li className="role" title={role} key={roleIdx}>
              {role}
            </li>
          ))}
        </ul>
      </div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="absolute right-[30px] top-[30px]"
        >
          <RiExternalLinkLine />
        </a>
      ) : null}
    </div>
  )
}
export default Projects
