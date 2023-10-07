import { BulletedListItem } from 'lib/types/blockType'
import RichTexts from 'lib/components/blocks/RichText/richTexts'
import NotionBlock from 'lib/components/blocks/Block/notionBlock'
import styles from './bulletedListItemBlock.module.scss'

export default function BulletedListItemBlock({
  block,
}: {
  block: BulletedListItem
}) {
  return (
    <ul className={`${styles.list}`}>
      <li>
        <RichTexts richTexts={block.bulleted_list_item.rich_text} />
        {block.children &&
          block.children.map((b, idx) => <NotionBlock key={idx} block={b} />)}
      </li>
    </ul>
  )
}
