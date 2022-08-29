import { useEffect, useRef } from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import projects from 'src/.data/projects'
import ReactMarkdown from 'react-markdown'

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

export default function Projects() {
  const isMounted = useRef<boolean>(true)

  useEffect(() => {
    if (!isMounted?.current) isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  function resolveAsset(location: string) {
    try {
      const asset = `/assets/${location}`
      return asset
    } catch (error: any) {
      console.error(error?.message)
    }
  }
  return (
    // <ul className="flex flex-col gap-y-[30px] pb-[20px]">
    <div className="pb-[20px] flex flex-col items-center ">
      <div className="w-full">
        <ul className="flex flex-wrap gap-8">
          {projects?.map(
            (
              {
                name,
                roles,
                timeline,
                description,
                client,
                client_url,
                link,
                image_url,
              }: ProjectDataInterface,
              idx
            ) => (
              <div
                className={['card min-w-[300px] flex-grow project '].join(' ')}
                key={idx}
              >
                <div>
                  <div className="flex gap-[15px]">
                    <div className="rounded-lg overflow-hidden w-[50px] h-[50px]  bg-opacity-50 text-[8px] justify-center items-center text-center flex flex-column">
                      <img
                        src={
                          image_url
                            ? resolveAsset(image_url)
                            : 'https://via.placeholder.com/50'
                        }
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <p className="name text-capitalize">{name}</p>
                      <ul className="inline-flex gap-[8px] meta">
                        {client ? (
                          <li
                            className="timeline text-gray-500"
                            title={timeline}
                          >
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
                  <div className="description">
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
          )}
        </ul>
      </div>
     <div>
        <header>
          <h3>Gallery</h3>
        </header>
        <div className="columns-3xs w-full py-[20px] my-[30px]">
         <div className="max-w-[350px] max-h-[300px]">
           <img src="https://via.placeholder.com/400" />
         </div>
        </div>  
     </div> 
    </div>
  )
}
