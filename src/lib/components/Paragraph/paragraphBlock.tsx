import { Paragraph } from '../../types/blockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import styles from './paragraphBlock.module.scss'

export default function ParagraphBlock({ block }: { block: Paragraph }) {
  return (
    <div className={styles.paragraph}>
      <RichTexts richTexts={block.paragraph.rich_text} />
      {block.children && (
        <div className={styles.children}>
          {block.children.map((child, idx) => (
            <NotionBlock key={idx} block={child} />
          ))}
        </div>
      )}
    </div>
  )
}
