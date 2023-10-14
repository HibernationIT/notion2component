import RichTexts from '../RichText/richTexts'
import { RichText } from '../../BlockType'
import { Container } from './styled'

export default function CaptionBlock({ caption }: { caption: RichText[] }) {
  return (
    <Container>
      <RichTexts richTexts={caption} />
    </Container>
  )
}
