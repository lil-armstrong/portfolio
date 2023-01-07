import React from 'react'
import useAppCxt from '@/hook/app.hook'
import { PAGES } from '@/types/pages'
interface TabPropsInterface {
  (props: {
    activeIndex: string | number
    setActiveIndex: React.Dispatch<React.SetStateAction<PAGES>>
  }): JSX.Element
}

export default function Tab({ children }: { children: TabPropsInterface }) {
  const appCxt = useAppCxt()
  const [activeIndex, setActiveIndex] = React.useState<PAGES>(appCxt.active)

  return children({ activeIndex, setActiveIndex })
}

export function Test() {
  const head = [<>Skills</>, <>Projects</>]
  const content = [
    <div className="p-4">
      Skills Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
      adipisci laboriosam obcaecati, sint, exercitationem voluptate fuga, totam
      repellendus error molestiae modi? Autem ut quam sunt? Tenetur doloribus
      dolore voluptate atque.
    </div>,
    <div className="p-4">
      Project Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
      adipisci laboriosam obcaecati, sint, exercitationem voluptate fuga, totam
      repellendus error molestiae modi? Autem ut quam sunt? Tenetur doloribus
      dolore voluptate atque.
    </div>,
  ]
  return (
    <Tab>
      {({ activeIndex, setActiveIndex }) => (
        <>
          {/* Tab head */}
          <ul className="flex gap-[10px]">
            {head.map((item, idx) => (
              <li key={idx} onClick={() => setActiveIndex(idx)}>
                {item}
              </li>
            ))}
          </ul>

          <section>
            {content.map((item, idx) => (
              <div hidden={idx !== activeIndex} key={idx}>
                {item}
              </div>
            ))}
          </section>
        </>
      )}
    </Tab>
  )
}
