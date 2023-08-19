import styled  from "styled-components";

export const ContainerStyled = styled.section<{bordered?: boolean}>(
  ({bordered}) => `
  flex-grow: 1;
  height: 100vh;
  position: relative;
  padding-bottom: 60px;
  justify-content: center;
  display: flex;
  flex-direction column;
  padding-top: 100px;
  overflow-y: auto;
  ${
    bordered ? `
    outline: 2px dashed red;
    outline-offset: -1px;
    ` : undefined
  }
`
)