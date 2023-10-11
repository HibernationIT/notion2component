import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { NumberedListItem } from '../../../types/blockType'
import styles from './numberedListItemBlock.module.scss'

interface IProps {
  block: NumberedListItem
  number: number | undefined
}

export default function NumberedListItemBlock({ block, number }: IProps) {
  return (
    <ol className={styles.list} start={number || 1}>
      <li>
        <RichTexts richTexts={block.numbered_list_item.rich_text} />
        {block.children &&
          block.children.map((b, idx) => <NotionBlock key={idx} block={b} />)}
      </li>
    </ol>
  )
}
