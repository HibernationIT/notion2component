import { Quote } from 'lib/types/blockType'
import NotionColor from 'lib/components/blocks/notionColor'
import RichTexts from 'lib/components/blocks/RichText/richTexts'
import styles from './quoteBlock.module.scss'

export default function QuoteBlock({ block }: { block: Quote }) {
  return (
    <div className={`${styles.quote} ${NotionColor(block.quote.color)}`}>
      <RichTexts richTexts={block.quote.rich_text} />
    </div>
  )
}
