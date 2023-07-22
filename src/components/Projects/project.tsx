import { useState, useEffect, useRef } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import projects, { IProject } from '@/.data/projects'
import ReactMarkdown from 'react-markdown'
// import { resolveAsset } from '../../helper'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import './style.scss'
import { StyledCard } from './styled'
import rgfm from 'remark-gfm'

export function Projects() {
  const isMounted = useRef<boolean>(true)

  useEffect(() => {
    if (!isMounted?.current) isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <div className="flex flex-col flex-grow h-screen">
      <h3 className="section-heading">Projects</h3>

      <div className="boxed_layout">
        <ul className="flex flex-wrap gap-[20px] py-[100px]">
          {projects?.map((data, idx: number) => {
            return (
              <li key={idx} className="flex-grow">
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

function ProjectCard(props: { data: IProject }): JSX.Element {
  const [image, setImage] = useState<string>()
  const { name, roles, timeline, link, org, image_url } = props.data

  useEffect(() => {
    if (image_url) {
      ;(async () => {
        const image = new URL(image_url, window.location.href).href
        setImage(image)
      })()
    }
  }, [image_url])

  return (
    <StyledCard
      className={[
        `card h-full min-w-[300px] max-w-[100%] lg:max-w-[${100/3}px] flex-grow project`,
      ].join(' ')}
    >
      <div className="flex-grow flex flex-col h-full">
        <div className="flex gap-[15px]">
          <div className="rounded-lg overflow-hidden w-[50px] h-[50px]  bg-opacity-50 text-[8px] justify-center items-center text-center flex flex-column">
            <img src={image} alt={name} />
          </div>
          <div className="ml-[8px] w-full">
            <p className="name text-capitalize">{name}</p>
            <ul className="inline-flex flex-wrap gap-[8px] meta">
              {org ? (
                <li className="timeline text-gray-500" title={timeline}>
                  {org?.website ? (
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={org?.website}
                      title={`${org?.name} website`}
                    >
                      {org?.name}
                    </a>
                  ) : (
                    org?.name
                  )}
                </li>
              ) : null}
              <li className="timeline opacity-60" title={timeline}>
                {timeline}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="description flex-grow text-wrap break-all w-[100%] border">
          <ReactMarkdown remarkPlugins={[rgfm]} className="">
            {description}
          </ReactMarkdown>
        </div> */}
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
    </StyledCard>
  )
}
export default Projects
