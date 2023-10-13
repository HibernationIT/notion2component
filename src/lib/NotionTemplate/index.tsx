import NotionBlock from '../components/Block/notionBlock'
import { Block } from '../types/blockType'
import { Container } from './styled'

export default function Index({ blocks }: { blocks: Block[] }) {
  return (
    <Container>
      {blocks.map((block, idx) => {
        let number = 1
        if (idx !== 0) {
          while (blocks[idx - number].type === 'numbered_list_item') {
            number++
          }
        }

        return <NotionBlock key={idx} block={block} numbered={number} />
      })}
    </Container>
  )
}
