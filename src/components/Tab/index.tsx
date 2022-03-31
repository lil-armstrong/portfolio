import React from 'react'

// interface TabDataInterface {
//   name: string | JSX.Element;
//   content: string | JSX.Element;
// }

interface TabPropsInterface {
  /* data: Array<TabDataInterface>;
  clearStyles?: boolean;
  headClass?: string | Array<string>;
  contentClass?: string | Array<string>; */
  (props: {
    activeIndex: string | number
    setActiveIndex: React.Dispatch<React.SetStateAction<string | number>>
  }): JSX.Element
}

export default function Tab({ children }: { children: TabPropsInterface }) {
  const [activeIndex, setActiveIndex] = React.useState<string | number>(0)
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
