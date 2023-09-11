import { ThemeCtx } from '@/context/theme'
import { useContext } from 'react'

export default function useTheme() {
  return useContext(ThemeCtx)
}
