import styled from 'styled-components'
import { ContentBoxStyled } from '../common/styled'

// flex flex-col self-center w-full h-full justify-center gap-[20px] items-center py-[30px]
export const ContentStyled = styled(ContentBoxStyled)(() => ({
  display: 'flex',
  flexFlow: 'column wrap',
  alignSelf: 'center',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  gap: 20,
  alignItems: 'center',
  paddingTop: 30,
  paddingBottom: 30,
  textAlign: 'center',
}))
