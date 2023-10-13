import NotionBlock from '../Block/notionBlock'
import { Column } from '../../types/blockType'
import { Container } from './styled'

export default function ColumnBlock({ block }: { block: Column }) {
  return (
    <Container>
      {block.children &&
        block.children.map((child, idx) => (
          <NotionBlock key={idx} block={child} />
        ))}
    </Container>
  )
}
