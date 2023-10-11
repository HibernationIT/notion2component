import { Quote } from '../../types/blockType'
import NotionColor from '../notionColor'
import RichTexts from '../RichText/richTexts'
import styles from './quoteBlock.module.scss'

export default function QuoteBlock({ block }: { block: Quote }) {
  return (
    <div className={`${styles.quote} ${NotionColor(block.quote.color)}`}>
      <RichTexts richTexts={block.quote.rich_text} />
    </div>
  )
}
