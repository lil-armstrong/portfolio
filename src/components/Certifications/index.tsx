import { RiExternalLinkLine } from 'react-icons/ri'
import certifications from 'src/.data/certifications.json'

export default function Certifications() {
  return (
    <div className="pb-[20px] flex flex-col items-center ">
      <ul className="lg:columns-2 gap-[20px] pb-[20px]">
        {certifications?.map(({ name, timeline, link }, idx) => (
          <li key={idx} className="card mt-[20px]">
            <div>
              <p className="name mb-1">{name}</p>
              <ul className="dot-list  meta text-gray-700 font-medium">
                <li className="list-item" title={timeline}>
                  {timeline}
                </li>
              </ul>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="absolute right-[30px] top-[30px]"
              >
                <RiExternalLinkLine />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
