import styled from 'styled-components'

export const ActionButtonStyled = styled.button(
  () => `
margin-top: 20px;
margin-bottom: 20px;
padding: 8px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
appearance: none;
user-select: none;
border: none;
display: inline-flex;
alignItems: center;
justify-content: center;
flex-wrap: wrap;
text-align: center;
box-shadow: var(--beam-shadow);
margin-left: -20px;

@media screen and (max-width: 500px){
    margin-left: -10px
}
`
)

export const WrapperStyled = styled.nav(
  () => `
  box-shadow: var(--beam-shadow);
  padding: 4px;
  border-radius: 12px;
  z-index: 10
`
)
