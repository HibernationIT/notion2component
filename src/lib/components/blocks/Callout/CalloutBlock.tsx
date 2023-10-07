import { Callout } from 'lib/types/blockType'
import IconBlock from 'lib/components/blocks/Icon/iconBlock'
import RichTexts from 'lib/components/blocks/RichText/richTexts'
import CalloutColor from './calloutColor'
import styles from './CalloutBlock.module.scss'

export default function CalloutBlock({ block }: { block: Callout }) {
  return (
    <div className={`${CalloutColor(block.callout.color)} ${styles.callout}`}>
      <IconBlock icon={block.callout.icon} />
      <div className={styles.content}>
        <RichTexts richTexts={block.callout.rich_text} />
      </div>
    </div>
  )
}
