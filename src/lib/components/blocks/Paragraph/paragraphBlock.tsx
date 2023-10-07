import RichTexts from 'lib/components/blocks/RichText/richTexts'
import { Paragraph } from 'lib/types/blockType'
import NotionBlock from 'lib/components/blocks/Block/notionBlock'
import styles from './paragraphBlock.module.scss'

export default function ParagraphBlock({ block }: { block: Paragraph }) {
  return (
    <>
      <RichTexts richTexts={block.paragraph.rich_text} />
      {block.children && (
        <div className={styles.children}>
          {block.children.map((child, idx) => (
            <NotionBlock key={idx} block={child} />
          ))}
        </div>
      )}
    </>
  )
}
