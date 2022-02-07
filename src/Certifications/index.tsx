import { RiExternalLinkLine } from 'react-icons/ri'
import certifications from '../json/certifications.json'

export default function Certifications() {
  return (
    <ul className="flex flex-col gap-[30px]">
      {certifications?.map(({ name, timeline, link }, idx) => (
        <li key={idx} className="card">
          <div>
            <p className="name mb-1">{name}</p>
            <ul className="dot-list  meta text-gray-500">
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
  )
}
