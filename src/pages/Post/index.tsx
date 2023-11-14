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
import { NavLink } from 'react-router-dom'

export function Post() {
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
            JavaScript data types and data structures
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
          <p>
            <b>Programming languages all have built-in data structures, 
            but these often differ from one language to another.</b> 
            This article attempts to list the built-in data structures available in JavaScript and what properties they have. 
            These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>

          <a href="#">Dynamic typing</a>

          <p>
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
          </p>

          <div>
            <p>let foo = 42;   // foo is now a number</p>
            <p>foo = ‘bar’;    // foo is now a string</p>
            <p>foo = true;     // foo is now a boolean</p>
          </div>
        </PostContent>

      </PostContainer>
    </MainContainer>
  )
}