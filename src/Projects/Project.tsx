import { RiExternalLinkLine } from "react-icons/ri";
import projects from "../json/projects.json";

interface ProjectDataInterface {
  name: string;
  roles: Array<string>;
  timeline: string;
  description: string;
  link: string;
}

export default function Projects() {
  return (
    <ul className="flex flex-col gap-y-[30px]">
      {projects?.map(
        (
          { name, roles, timeline, description, link }: ProjectDataInterface,
          idx
        ) => (
          <div className="card project" key={idx}>
            <div>
              <p className="name text-capitalize">{name}</p>
              <ul className="inline-flex gap-[8px] meta">
                <li className="timeline text-gray-500" title={timeline}>
                  {timeline}
                </li>
              </ul>
              <div className="description">{description}</div>
              <ul className="roles">
                {roles?.map((role, roleIdx) => (
                  <li className="role" title={role} key={roleIdx}>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="absolute right-[30px] top-[30px]"
            >
              <RiExternalLinkLine />
            </a>
          </div>
        )
      )}
    </ul>
  );
}
