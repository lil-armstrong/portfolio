import projects, { IProject } from '@/.data/projects'
import { useEffect, useRef, useState } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
// import { resolveAsset } from '../../helper'
import { PAGES } from '@/types/pages'
import BottomNavigation from '../BottomNavigation/bottom_navigation'
import './style.scss'
import { StyledCard } from './styled'
import { ContainerStyled } from '../common/styled'

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
        `card  min-w-[300px] max-w-[100%] lg:max-w-[${100/3}px] flex-grow project`,
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
          aria-label={`Visit external link: ${link}`}
          className="absolute right-[30px] top-[30px]"
        >
          <RiExternalLinkLine role="presentation" />
        </a>
      ) : null}
    </StyledCard>
  )
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
    <ContainerStyled>
      <h3 className="section-heading">Projects</h3>

      <div className="boxed_layout">
        <ul className="flex flex-wrap py-[30px] gap-[20px] ">
          {projects?.map((data, idx: number) => {
            return (
              <li key={idx} className="flex-grow">
                <ProjectCard data={data} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="absolute bottom-0 w-full left-0">
        <BottomNavigation
          leftSlot={{ content: 'Certifications', to: PAGES.CERT }}
          rightSlot={{
            content: 'Blog',
            to: PAGES.BLOG,
          }}
        />
      </div>
    </ContainerStyled>
  )
}

export default Projects
