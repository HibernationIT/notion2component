import { Paragraph } from '../../types/blockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { Container } from './styled'

export default function ParagraphBlock({ block }: { block: Paragraph }) {
  return (
    <Container>
      <RichTexts richTexts={block.paragraph.rich_text} />
      {block.children && (
        <div className="children">
          {block.children.map((child, idx) => (
            <NotionBlock key={idx} block={child} />
          ))}
        </div>
      )}
    </Container>
  )
}
