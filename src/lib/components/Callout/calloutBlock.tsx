import { Callout } from '../../types/blockType'
import IconBlock from '../Icon/iconBlock'
import RichTexts from '../RichText/richTexts'
import CalloutColor from './calloutColor'
import styles from './calloutBlock.module.scss'

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
