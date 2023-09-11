import { animated as anm, useSpring } from '@react-spring/web'
import React, { ImgHTMLAttributes, useCallback } from 'react'
import styles from './styles.module.scss'
import BlurOnScroll from './BlurOnScroll/BlurOnScroll'

type Props = React.PropsWithChildren & ImgHTMLAttributes<HTMLImageElement>

function MotionSensitiveImage(props: Props) {
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
  const interpolatePerspective = xyz.to(
    (x, y, z) =>
      `perspective(1700px) rotateX(${x}deg) rotateY(${y}degImgHTMLAttributes) scale(${z})`
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
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <anm.div
        className={styles.card}
        style={{
          transform: interpolatePerspective,
        }}
      >
        <BlurOnScroll y={100}>
          <img src={props?.src} alt={props?.alt} />
        </BlurOnScroll>
      </anm.div>
    </div>
  )
}

export default MotionSensitiveImage
