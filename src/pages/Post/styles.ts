import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: ${(props) => props.theme['base-background']};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  flex: 1;
  padding-bottom: 4rem;
`

export const HeaderPostContainer = styled.section`
  display: flex;
  gap: 2rem;
  
  width: 864px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -80px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
`

export const HeaderPostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['blue']};
    text-decoration: none;
    cursor: pointer;

    font-size: 0.75rem;
    font-family: 'Munito' sans-serif;
    font-weight: 700;
  }
`

export const HeaderPostSocial = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const PostContainer = styled.section`
  width: 864px;
  padding: 0 2rem;
`

export const PostContent = styled.div`
  p {
    font-family: Nunito, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    margin-bottom: 1rem;
  }

  div {
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 2px
  }
`
