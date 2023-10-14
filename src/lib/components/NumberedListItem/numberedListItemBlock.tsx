import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { NumberedListItem } from '../../BlockType'
import { Container } from './styled'

interface IProps {
  block: NumberedListItem
  number: number | undefined
}

export default function NumberedListItemBlock({ block, number }: IProps) {
  return (
    <Container>
      <ol className="list" start={number || 1}>
        <li>
          <div className="content">
            <RichTexts richTexts={block.numbered_list_item.rich_text} />
          </div>
          {block.children &&
            block.children.map((b, idx) => <NotionBlock key={idx} block={b} />)}
        </li>
      </ol>
    </Container>
  )
}
