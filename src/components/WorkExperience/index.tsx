import work_experience from 'src/.data/work_experience.json'

export default function WorkExperience() {
  return (
    <section className="boxed_layout">
      <ul className="flex flex-col timeline-listing">
        {work_experience?.map(
          ({ org, roles, timeline, location, description }, idx) => (
            <li key={idx} className="card timeline">
              <div>
                <p className="org mb-1">{org}</p>
                <ul className="dot-list  meta text-gray-700">
                  <li className="list-item" title={timeline}>
                    {timeline}
                  </li>
                </ul>
                <div className="description text-normal text-sm my-2">
                  {description}
                </div>
                <ul className="flex gap-[4px] flex-wrap">
                  {roles?.map((role, roleIdx) => (
                    <li className="tag" title={role} key={roleIdx}>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  )
}
