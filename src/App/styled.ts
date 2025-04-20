import menu from '@/components/Menu/menu'
import styled from 'styled-components'
import Collapsible from '@/components/Collapsible/Collapsible'

// block relative h-[100vh] overflow-hidden
export const ContainerStyled = styled('div')(() => ({
  display: 'block',
  flexDirection: 'column',
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
}))

// fixed md:left-[20px]  top-[10px]  z-[10]
export const CollapsibleStyled = styled(Collapsible)(() => ({
  position: 'fixed',
  bottom: 10,
  right: 0,
  zIndex: 100,
}))
// flex flex-col gap-[10px] items-center
export const CollapsibleWrapperStyled = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  alignItems: 'center',
}))

// left-[60px] top-[60px] w-[300px]
export const MenuStyled = styled(menu)(() => ({
  right: 70,
  bottom: 60,
  width: 300,
}))

// relative h-[70px] border-2 w-[30px]  overflow-hidden rounded-[8px] py-[4px] flex flex-col items-center justify-center
export const ScrollButtonWrapperStyled = styled('div')(() => ({
  position: 'relative',
  height: 70,
  borderWidth: 2,
  width: 30,
  overflow: 'hidden',
  borderRadius: 8,
  paddingTop: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

// z-[2] relative hidden_scrollbar
export const MainContentStyled = styled('main')(() => ({
  zIndex: 2,
  position: 'relative',
  height: '100vh',
  width: '100%',
}))

// md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen
export const TabInnerContainerStyled = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'column wrap',
  position: 'relative',
  zIndex: 1,
  maxHeight: '100vh',
  overflowY: 'auto',
  width: '100%',

  '@media (min-width: 768px)': {
    flex: 'auto',
    flexWrap: 'nowrap',
  },
}))

// z-0 relative w-full h-full overflow-y-auto
export const TabContentContainerStyled = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
  zIndex: 0,
  width: '100%',
  height: '100vh',
  maxHeight: '100vh',
  top: 0,
}))

// h-full flex-grow m-auto
export const TabContentStyled = styled('section')(() => ({
  display: 'flex',
  flexGrow: 1,
  margin: 'auto',
  minWidth: '100vw',
  height: '100vh',
  width: '100',
  overflow: 'hidden',
}))
