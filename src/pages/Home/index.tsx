import { Card, MainContainer, MainContent, ProfileContainer, ProfileContent, ProfileHeader, ProfileSocial, SearchContainer } from './styles'

import avatar from '../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface User {
  name: string
  avatar_url: string
  html_url: string
  company: string
  login: string
  followers: string
  bio: string
}

export function Home() {
  const [user, setUser] = useState<User | null>(null)

  async function getUser() {
    const response = await api.get('/users/giluansouza')

    console.log(response.data)
    setUser(response.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <MainContainer>
      <ProfileContainer>
        <img width="148px" height="148px" src={user?.avatar_url} alt="avatar" />
        <ProfileContent>
          <ProfileHeader>
            <strong>{user?.name}</strong>
            <a href={user?.html_url} target="_blank">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileHeader>
          <p>
            {user?.bio}
          </p>
          <ProfileSocial>
            <a><FontAwesomeIcon icon={faGithub} /> {user?.login}</a>
            <a><FontAwesomeIcon icon={faBuilding} /> {user?.company ?? 'Rocketseat'}</a>
            <a><FontAwesomeIcon icon={faUserGroup} /> {user?.followers} seguidores</a>
          </ProfileSocial>
        </ProfileContent>
      </ProfileContainer>
      <SearchContainer>
        <div>
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>
        <input type='text' placeholder='Buscar conteúdos' />
      </SearchContainer>
      <MainContent>
        <Card>
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>
          <p>
            Programming languages all have built-in data structures, 
            but these often differ from one language to another. 
            This article attempts to list the built-in data structures 
            available in ...
          </p>
        </Card>

        <Card>
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>
          <p>
            Programming languages all have built-in data structures, 
            but these often differ from one language to another. 
            This article attempts to list the built-in data structures 
            available in ...
          </p>
        </Card>

        <Card>
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>
          <p>
            Programming languages all have built-in data structures, 
            but these often differ from one language to another. 
            This article attempts to list the built-in data structures 
            available in ...
          </p>
        </Card>

        <Card>
          <header>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </header>
          <p>
            Programming languages all have built-in data structures, 
            but these often differ from one language to another. 
            This article attempts to list the built-in data structures 
            available in ...
          </p>
        </Card>
      </MainContent>
    </MainContainer>
  )
}