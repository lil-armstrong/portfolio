import './index.scss'
import { RiMoonFill, RiSunFill, RiEarthLine } from 'react-icons/ri'
import { ThemeCtx } from '../../context/ThemeContext'
import { useContext } from 'react'

export default function ThemeSwitch() {
  const theme = useContext(ThemeCtx)
  return (
    <div className="fixed right-[0] flex flex-row gap-[4px] z-[2] md:mr-[60px] bottom-0  mr-[15px] mb-[20px]">
      <button className="round-btn" onClick={() => theme?.onSwitch()}>
        {theme?.currentValue === 'light' ? <RiMoonFill /> : <RiSunFill />}
        <span className="hidden md:block">
          {theme?.currentValue === 'light' ? 'Dark' : 'Light'}
        </span>
      </button>
      <button title="Select a language" className="round-btn">
        <RiEarthLine /> English
      </button>
    </div>
  )
}
