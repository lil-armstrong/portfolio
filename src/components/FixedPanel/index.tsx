import './index.scss'
import { RiMoonFill, RiSunFill /* RiEarthLine */ } from 'react-icons/ri'
import { ThemeCtx } from '../../context/theme.context'
import { useContext } from 'react'

export function ThemeSwitch() {
  const theme = useContext(ThemeCtx)
  return (
    <div className="absolute left-[30px] flex flex-row gap-[4px] z-[2] md:mr-[60px] top-[10px]  mr-[15px] mb-[-4px]">
      <button className="square-btn" onClick={() => theme?.onSwitch()}>
        {theme?.currentValue === 'light' ? <RiMoonFill /> : <RiSunFill />}
        <span className="hidden md:block">
          {theme?.currentValue === 'light' ? 'Dark' : 'Light'}
        </span>
      </button>
      {/* <button title="Select a language" className="square-btn">
        <RiEarthLine /> English
      </button> */}
    </div>
  )
}
export default ThemeSwitch
