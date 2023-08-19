import styles from './style.module.scss'
import useAppCxt from '@/hook/app.hook'
import { BiMoon, BiSun } from 'react-icons/bi'
import cl from 'classnames'
function ThemeSwitcher() {
  const { theme } = useAppCxt()

  return (
    <>
      <button
        aria-label="Change theme"
        id="switch-theme"
        className={cl(styles.button, 'floating__btn rounded-full')}
        onClick={() => theme?.toggle()}
      >
        {theme?.mode === 'light' ? (
          <BiMoon aria-labelledby="switch-theme" />
        ) : (
          <BiSun aria-labelledby="switch-theme" />
        )}
        {/* <span className="hidden md:block">
          {theme?.currentValue === 'light' ? 'Dark' : 'Light'}
        </span> */}
      </button>
    </>
  )
}

export default ThemeSwitcher
