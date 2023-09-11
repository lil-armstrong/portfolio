import { tColorScheme } from '@/types/theme'
import cl from 'classnames'
import { BiMoon, BiSun } from 'react-icons/bi'
import styles from './style.module.scss'

function ThemeSwitcher({
  onChange,
  mode = 'system',
}: {
  onChange?: () => void | undefined
  /**
   * Mode should be a stateful property.
   * It determines the state of the icon
   */
  mode?: tColorScheme
}) {
  const size = 18

  return (
    <button
      data-cy="actionButton"
      aria-label="Change theme"
      id="switch-theme"
      className={cl(styles.button, '')}
      onClick={() => {
        onChange && onChange()
      }}
    >
      {mode === 'light' ? (
        <BiMoon
          size={size}
          aria-labelledby="switch-theme"
          data-cy="lightModeIcon"
        />
      ) : (
        <BiSun
          size={size}
          aria-labelledby="switch-theme"
          data-cy="darkModeIcon"
        />
      )}
    </button>
  )
}

export default ThemeSwitcher
