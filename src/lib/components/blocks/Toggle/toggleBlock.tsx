import { useState } from 'react'
import { Toggle } from '../../../types/blockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import styles from './toggleBlock.module.scss'

export default function ToggleBlock({ block }: { block: Toggle }) {
  const [isOpen, setOpen] = useState(true)

  return (
    <div className={`${styles.toggle} ${isOpen ? styles.open : ''}`}>
      <div>
        <button
          className={styles.button}
          onClick={() => setOpen((state) => !state)}
        >
          <svg role="graphics-symbol" viewBox="0 0 100 100">
            <polygon points="5.9,88.2 50,11.8 94.1,88.2 " />
          </svg>
        </button>
        <RichTexts richTexts={block.toggle.rich_text} />
      </div>
      {block.has_children && (
        <div className={styles.children}>
          {block.children &&
            block.children.map((child, idx) => (
              <NotionBlock key={idx} block={child} />
            ))}
        </div>
      )}
    </div>
  )
}
