import { animated as anm, useSpring } from '@react-spring/web'
import { useCallback } from 'react'
import styles from './styles.module.scss'

type Props = React.PropsWithChildren

function ImageSense(props: Props) {
  const [{ xyz }, springRef] = useSpring(() => ({
    xyz: [0, 0, 1],
  }))
  const calcXYZ = (x: number, y: number) => {
    const output = [
      -(y - window.innerHeight / 2) / 60,
      (x - window.innerWidth / 2) / 60,
      1.0,
    ]
    return output
  }
  const interpPerps = xyz.to(
    (x, y, z) =>
      `perspective(1700px) rotateX(${x}deg) rotateY(${y}deg) scale(${z})`
  )
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = useCallback(
    ({ clientX: x, clientY: y }) => {
      springRef.set({
        xyz: calcXYZ(x, y),
      })
    },
    [springRef]
  )

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = useCallback(
    ({ clientX: x, clientY: y }) => {
      springRef.set({
        xyz: [0, 0, 1],
      })
    },
    [springRef]
  )

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={``}
    >
      <anm.div
        className={styles.card}
        style={{
          transform: interpPerps,
        }}
      >
        {props.children}
      </anm.div>
    </div>
  )
}

export default ImageSense
