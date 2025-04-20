import skills from '@/.data/skills'
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
import styles from './style.module.scss'
import { SkillListStyled } from './styled'
import classNames from 'classnames'

interface TechnicalSkillInterface {
  name: string
  tools?: SkillDataToolInterface[]
  level?: string
  icon?: string
}

interface SkillDataToolInterface {
  name: string
  level?: string
}

function Skills() {
  return (
    <ContainerStyled>
      <SectionHeaderStyled>
        <SectionHeaderTitleStyled>Skills</SectionHeaderTitleStyled>
      </SectionHeaderStyled>

      <InnerContainerStyled>
        <ContentBoxStyled>
          <ListContainerStyled>
            {Object.entries(skills)?.map(
              (
                [key, value]: [
                  key: string,
                  value?: (TechnicalSkillInterface | string)[]
                ],
                indx
              ) => (
                <SkillListStyled key={indx}>
                  <li>
                    <h3 className={`capitalize  ${styles.title}`}>
                      {key?.replace(/[-_]/g, ' ')}
                    </h3>
                  </li>
                  {value?.length ? (
                    <li>
                      {(() => {
                        switch (key) {
                          case 'technical-skills': {
                            return (
                              <div className="w-[100vw - 50px]">
                                <ListStyled>
                                  {value?.map((item, idx) => {
                                    if (typeof item === 'string') {
                                      return (
                                        <ListItemStyled
                                          key={idx}
                                          className="tag"
                                          title={item}
                                        >
                                          {item}
                                        </ListItemStyled>
                                      )
                                    } else if (
                                      item &&
                                      typeof item === 'object'
                                    ) {
                                      return (
                                        <ListItemStyled
                                          $grow
                                          key={idx}
                                          className="card skill flex-grow"
                                        >
                                          <div className="">
                                            {item?.icon && (
                                              <span className="card-icon">
                                                <img
                                                  src={item?.icon}
                                                  alt="icon"
                                                />
                                              </span>
                                            )}
                                            <div className="card-meta">
                                              <h4
                                                className={classNames(
                                                  styles.skill_category_name
                                                )}
                                              >
                                                {item?.name}
                                              </h4>

                                              {item?.tools && (
                                                <ListStyled>
                                                  {item?.tools?.map(
                                                    ({ name }, toolIdx) => (
                                                      <ListItemStyled
                                                        className="tag"
                                                        title={name}
                                                        key={toolIdx}
                                                      >
                                                        {name}
                                                      </ListItemStyled>
                                                    )
                                                  )}
                                                </ListStyled>
                                              )}
                                            </div>
                                          </div>
                                        </ListItemStyled>
                                      )
                                    }
                                    return null
                                  })}
                                </ListStyled>
                              </div>
                            )
                          }
                          case 'soft-skills':
                          case 'interest': {
                            return (
                              <ListStyled>
                                {value?.map((item, key) => (
                                  <ListItemStyled
                                    key={key}
                                    className="tag"
                                    title={item as string}
                                  >
                                    {item as string}
                                  </ListItemStyled>
                                ))}
                              </ListStyled>
                            )
                          }
                          default:
                            return null
                        }
                      })()}
                    </li>
                  ) : null}
                </SkillListStyled>
              )
            )}
          </ListContainerStyled>
        </ContentBoxStyled>
      </InnerContainerStyled>

      <SectionFooterStyled>
        <SectionNavigationBar
          leftSlot={{ content: 'Work Experience', to: PAGES.WORK_EXP }}
          rightSlot={{
            content: 'Certifications',
            to: PAGES.CERTIFICATION,
          }}
        />
      </SectionFooterStyled>
    </ContainerStyled>
  )
}

export default Skills
