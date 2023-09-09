import styled from "styled-components";

export const ArticleStyled = styled.article(
  () => `
width: 100%;
min-width: 100%;
max-width: calc(50% - 30px);
margin-bottom: 30px;
flex-grow: 1;
@media screen and (min-width: 500px){
    min-width: 400px;
}
`
)
