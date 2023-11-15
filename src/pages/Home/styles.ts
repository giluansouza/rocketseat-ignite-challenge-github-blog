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

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;

  width: 864px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -80px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  img {
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-family: 'Munito' sans-serif;
    line-height: 160%;
    flex: 1;
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  strong {
    font-size: 1.5rem;
    font-family: 'Munito' sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

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

export const ProfileSocial = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const SearchContainer = styled.section`
  width: 864px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    width: 100%;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    padding: 1rem;
    border: 0;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

  }
`

export const MainContent = styled.section`
  width: 864px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`