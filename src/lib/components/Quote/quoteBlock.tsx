import { Quote } from '../../BlockType'
import RichTexts from '../RichText/richTexts'
import { Container } from './styled'

export default function QuoteBlock({ block }: { block: Quote }) {
  return (
    <Container className={block.quote.color}>
      <RichTexts richTexts={block.quote.rich_text} />
    </Container>
  )
}
