import styles from './style.module.scss'
import useAppCxt from '@/hook/app.hook'
import { BiMoon, BiSun } from 'react-icons/bi'

function ThemeSwitcher() {
  const { theme } = useAppCxt()

  return (
    <>
      <button
        className={`${styles.button} rounded-full text-[20px]`}
        onClick={() => theme?.toggle()}
      >
        {theme?.mode === 'light' ? <BiMoon /> : <BiSun />}
        {/* <span className="hidden md:block">
          {theme?.currentValue === 'light' ? 'Dark' : 'Light'}
        </span> */}
      </button>
    </>
  )
}

export default ThemeSwitcher
