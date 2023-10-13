import RichTexts from '../RichText/richTexts'
import { RichText } from '../../types/blockType'
import { Container } from './styled'

export default function CaptionBlock({ caption }: { caption: RichText[] }) {
  return (
    <Container>
      <RichTexts richTexts={caption} />
    </Container>
  )
}
