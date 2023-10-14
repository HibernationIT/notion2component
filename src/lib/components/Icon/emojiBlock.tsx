import { Emoji } from '../../BlockType'
import { Container } from './emotionStyled'

interface IProps {
  emoji: Emoji
}

export default function EmojiBlock({ emoji }: IProps) {
  return (
    <Container>
      <div>
        <div>
          <span>{emoji.emoji}</span>
        </div>
      </div>
    </Container>
  )
}
