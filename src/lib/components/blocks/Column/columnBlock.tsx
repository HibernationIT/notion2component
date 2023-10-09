import NotionBlock from 'lib/components/blocks/Block/notionBlock'
import { Column } from 'lib/types/blockType'
import styles from './columnBlock.module.scss'

export default function ColumnBlock({ block }: { block: Column }) {
  return (
    <div className={styles.column}>
      {block.children &&
        block.children.map((child, idx) => (
          <NotionBlock key={idx} block={child} />
        ))}
    </div>
  )
}
