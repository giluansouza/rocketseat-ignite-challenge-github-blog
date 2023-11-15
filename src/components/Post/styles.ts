import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      font-family: Nunito, sans-serif;
      color: ${(props) => props.theme['base-title']};
      line-height: 160%;
    }

    span {
      min-width: 60px;
      font-size: 0.875rem;
      font-family: Nunito, sans-serif;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    font-family: Nunito, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`

export const PostLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};
`