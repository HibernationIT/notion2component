import RichTexts from 'lib/components/blocks/RichText/richTexts'
import { RichText } from 'lib/types/blockType'
import styles from './captionBlock.module.scss'

export default function CaptionBlock({ caption }: { caption: RichText[] }) {
  return (
    <div className={styles.caption}>
      <RichTexts richTexts={caption} />
    </div>
  )
}
