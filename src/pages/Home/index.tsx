import { MainContainer, MainContent, ProfileContainer, ProfileContent, ProfileHeader, ProfileSocial, SearchContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { CardPost } from '../../components/Post'

interface User {
  name: string
  avatar_url: string
  html_url: string
  company: string
  login: string
  followers: string
  bio: string
}

interface Posts {
  title: string
  body: string
  date: string
  created_at: string
  number: number
}

export function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Posts[] | []>([])

  async function getUser() {
    const response = await api.get('/users/giluansouza')

    setUser(response.data)
  }

  async function getPosts() {
    const response = await api.get('/search/issues?q=repo:giluansouza/rocketseat-ignite-github-blog')

    setPosts(response.data.items)
  }

  useEffect(() => {
    getUser()
    getPosts()
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
          <span>{posts.length} publicações</span>
        </div>
        <input type='text' placeholder='Buscar conteúdos' />
      </SearchContainer>
      <MainContent>
        {posts.map((post) => (
          <CardPost key={post.title} {...post} />
        ))}
      </MainContent>
    </MainContainer>
  )
}