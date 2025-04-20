import { IThemeProps } from '@/types/theme'
import cl from 'classnames'
import { BiMoon, BiSun, BiAdjust } from 'react-icons/bi'
import styles from './style.module.scss'
import { useCallback } from 'react'

const size = 18

function ThemeSwitcher({ onChange, mode = 'system' }: IThemeProps) {
  const ButtonIcon = useCallback(() => {
    switch (mode) {
      case 'dark':
        return (
          <BiSun
            size={size}
            aria-labelledby="switch-theme"
            data-cy="darkModeIcon"
          />
        )

      case 'light':
        return (
          <BiMoon
            size={size}
            aria-labelledby="switch-theme"
            data-cy="lightModeIcon"
          />
        )
      case 'system':
      default:
        return (
          <BiAdjust
            size={size}
            aria-labelledby="switch-theme"
            data-cy="defaultModeIcon"
          />
        )
    }
  }, [mode])

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
      <ButtonIcon />
    </button>
  )
}

export default ThemeSwitcher
