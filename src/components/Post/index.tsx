import { formatDistanceToNow } from "date-fns";
import { Card, PostLink } from "./styles";
import { ptBR } from "date-fns/locale";
import { TextWithLimit } from "../../utils/formatter";

export function CardPost(props: any) {
  const { title, created_at, body, number } = props

  return (
    <PostLink to={`/post/${number}`}>
      <Card>
        <header>
          <h2>{title}</h2>
          <span>
            {formatDistanceToNow(new Date(created_at), {
              locale: ptBR,
            })}
          </span>
        </header>
        <p>
          {TextWithLimit(body, 150)}
        </p>
      </Card>
    </PostLink>
  )
}