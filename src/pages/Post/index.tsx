import { useEffect, useRef, useState } from 'react'
import { 
  HeaderPostContainer,
  HeaderPostContent,
  HeaderPostHeader,
  HeaderPostSocial,
  MainContainer,
  PostContainer,
  PostContent
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faChevronLeft, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Post {
  title: string
  body: string
  date: string
  created_at: string
  number: number
}

export function Post() {
  const [post, setPost] = useState<Post | null>(null)
  const issueNumber = Number(useParams().id)
  const ref = useRef(null)

  async function getIssue() {
    const response = await api.get(`/repos/giluansouza/rocketseat-ignite-github-blog/issues/${issueNumber}`)

    setPost(response.data)
  }

  useEffect(() => {
    getIssue()
    console.log(post)
  }, [])

  return (
    <MainContainer>
      <HeaderPostContainer>
        <HeaderPostContent>
          <HeaderPostHeader>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
            </NavLink>
            <a href="#">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </HeaderPostHeader>
          <h2>
            {post?.title}
          </h2>
          <HeaderPostSocial>
            <a><FontAwesomeIcon icon={faGithub} /> cameronwll</a>
            <a><FontAwesomeIcon icon={faBuilding} /> Rocketseat</a>
            <a><FontAwesomeIcon icon={faUserGroup} /> 32 seguidores</a>
          </HeaderPostSocial>
        </HeaderPostContent>
      </HeaderPostContainer>

      <PostContainer>

        <PostContent>
          <ReactMarkdown children={post?.body}
            components={{
              code({node, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={{ ...oneDark } as any}
                    language={match[1]}
                    PreTag="div"
                    ref={ref as any}
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </PostContent>

      </PostContainer>
    </MainContainer>
  )
}