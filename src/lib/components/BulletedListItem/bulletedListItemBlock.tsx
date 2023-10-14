import { BulletedListItem } from '../../BlockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { Container } from './styled'

export default function BulletedListItemBlock({
  block,
}: {
  block: BulletedListItem
}) {
  return (
    <Container>
      <ul className="list">
        <li>
          <div className="content">
            <RichTexts richTexts={block.bulleted_list_item.rich_text} />
          </div>
          {block.children &&
            block.children.map((b, idx) => <NotionBlock key={idx} block={b} />)}
        </li>
      </ul>
    </Container>
  )
}
