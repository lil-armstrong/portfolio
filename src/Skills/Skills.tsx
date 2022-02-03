import skills from '../json/skills.json'

interface TechnicalSkillInterface {
  name: string
  tools?: Array<SkillDataToolInterface>
  level?: string
  icon?: string
}

interface SkillDataToolInterface {
  name: string
  level?: string
}

export default function Skills() {
  return (
    <div className="flex flex-col gap-[30px]">
      {Object.entries(skills)?.map(
        ([key, value]: [key: string, value?: Array<any>], indx) => (
          <ul key={indx} className="flex flex-col gap-[15px]">
            <li>
              <p className="capitalize text-lg">{key?.replace(/[-_]/g, ' ')}</p>
            </li>
            {value?.length && (
              <li>
                {(() => {
                  switch (key) {
                    case 'technical-skills': {
                      return (
                        <ul className="flex flex-col flex-wrap gap-[15px]">
                          {value?.map((item: TechnicalSkillInterface, idx) => (
                            <li key={idx} className="card skill">
                              {item?.icon && (
                                <span className="card-icon">
                                  <img src={item?.icon} alt="icon" />
                                </span>
                              )}
                              <div className="card-meta">
                                <p className="text-capitalize name">
                                  {item?.name}
                                </p>
                                {item?.level && (
                                  <small className="capitalize text-gray-400 inline-block mt-2">
                                    {item?.level}
                                  </small>
                                )}

                                {item?.tools && (
                                  <ul className="flex flex-wrap gap-[8px] mt-3">
                                    {item?.tools?.map(
                                      ({ name, level }, toolIdx) => (
                                        <li
                                          className="tag"
                                          title={name}
                                          key={toolIdx}
                                        >
                                          {name}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    case 'soft-skills':
                    case 'interest': {
                      return (
                        <ul className="flex gap-[8px] flex-wrap text-sm">
                          {value?.map((item, key) => (
                            <li key={key} className="tag" title={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    }
                  }
                })()}
              </li>
            )}
          </ul>
        )
      )}
    </div>
  )
}
