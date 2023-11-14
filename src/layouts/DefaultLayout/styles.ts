import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;

  background-color: ${(props) => props.theme['base-background']};
`