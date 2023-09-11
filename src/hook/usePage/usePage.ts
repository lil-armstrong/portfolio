import { PageContext } from '@/context/page'
import React from 'react'

export default function usePage() {
  return React.useContext(PageContext)
}
