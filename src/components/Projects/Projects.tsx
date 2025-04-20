import projects, { IProject } from '@/.data/projects'
import { useEffect, useRef, useState } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import {
  ContainerStyled,
  ContentBoxStyled,
  InnerContainerStyled,
  ListContainerStyled,
  ListItemStyled,
  ListStyled,
  SectionFooterStyled,
  SectionHeaderStyled,
  SectionHeaderTitleStyled,
} from '@/components/common/styled'
import { PAGES } from '@/types/pages'
import SectionNavigationBar from '../SectionNavigation/SectionNavigation'
import './style.scss'
import { PictureStyled, ProjectCardStyled, ProjectItemLink } from './styled'

function ProjectCard(props: { data: IProject }): JSX.Element {
  const [image, setImage] = useState<string>()
  const { name, roles, timeline, link, org, image_url } = props.data

  useEffect(() => {
    if (image_url) {
      ;(() => {
        const image = new URL(image_url, window.location.href).href
        setImage(image)
      })()
    }
  }, [image_url])

  return (
    <ProjectCardStyled className="card project">
      <div>
        <div>
          <PictureStyled>
            <img src={image} alt={name} />
          </PictureStyled>
          <div>
            <h3 className="title">{name}</h3>
            <ul className="meta">
              {org ? (
                <li className="timeline" title={timeline}>
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
              <li title={timeline}>{timeline}</li>
            </ul>
          </div>
        </div>

        <ul className="roles">
          {roles?.map((role, roleIdx) => (
            <li className="tag" title={role} key={roleIdx}>
              {role}
            </li>
          ))}
        </ul>
      </div>
      {link ? (
        <ProjectItemLink
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit external link: ${link}`}
        >
          <RiExternalLinkLine role="presentation" />
        </ProjectItemLink>
      ) : null}
    </ProjectCardStyled>
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
      <SectionHeaderStyled>
        <SectionHeaderTitleStyled>Projects</SectionHeaderTitleStyled>
      </SectionHeaderStyled>

      <InnerContainerStyled>
        <ContentBoxStyled>
          <ListContainerStyled>
            <ListStyled>
              {projects?.map((data, idx: number) => {
                return (
                  <ListItemStyled $grow key={idx} className="flex-grow">
                    <ProjectCard data={data} />
                  </ListItemStyled>
                )
              })}
            </ListStyled>
          </ListContainerStyled>
        </ContentBoxStyled>
      </InnerContainerStyled>

      <SectionFooterStyled>
        <SectionNavigationBar
          leftSlot={{ content: 'Certifications', to: PAGES.CERTIFICATION }}
          rightSlot={{
            content: 'Blog',
            to: PAGES.BLOG,
          }}
        />
      </SectionFooterStyled>
    </ContainerStyled>
  )
}

export default Projects
