import { Emoji } from 'lib/types/blockType'
import styles from './emojiBlock.module.scss'

interface IProps {
  emoji: Emoji
}

export default function EmojiBlock({ emoji }: IProps) {
  return (
    <div className={styles.emoji}>
      <div>
        <div>
          <span>{emoji.emoji}</span>
        </div>
      </div>
    </div>
  )
}
