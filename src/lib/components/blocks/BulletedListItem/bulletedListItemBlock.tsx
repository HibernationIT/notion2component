import { BulletedListItem } from '../../../types/blockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import styles from './bulletedListItemBlock.module.scss'

export default function BulletedListItemBlock({
  block,
}: {
  block: BulletedListItem
}) {
  return (
    <ul className={styles.list}>
      <li>
        <div className={styles.content}>
          <RichTexts richTexts={block.bulleted_list_item.rich_text} />
        </div>
        {block.children &&
          block.children.map((b, idx) => <NotionBlock key={idx} block={b} />)}
      </li>
    </ul>
  )
}
