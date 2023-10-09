import { useState } from 'react'
import { Header1, Header2, Header3 } from 'lib/types/blockType'
import RichTexts from 'lib/components/blocks/RichText/richTexts'
import NotionColor from 'lib/components/blocks/notionColor'
import NotionBlock from 'lib/components/blocks/Block/notionBlock'
import styles from './headerBlock.module.scss'

interface IProps {
  block: Header1 | Header2 | Header3
}

export default function HeaderBlock({ block }: IProps) {
  const [isOpen, setOpen] = useState(true)
  const header =
    block.type === 'heading_1'
      ? (block as Header1).heading_1
      : block.type === 'heading_2'
      ? (block as Header2).heading_2
      : (block as Header3).heading_3
  const headerStyle =
    block.type === 'heading_1'
      ? styles.header1
      : block.type === 'heading_2'
      ? styles.header2
      : styles.header3

  function content() {
    return (
      <>
        {header.is_toggleable && (
          <button
            className={styles.button}
            onClick={() => setOpen((state) => !state)}
          >
            <svg role="graphics-symbol" viewBox="0 0 100 100">
              <polygon points="5.9,88.2 50,11.8 94.1,88.2 " />
            </svg>
          </button>
        )}
        <RichTexts richTexts={header.rich_text} />
      </>
    )
  }

  return (
    <div
      className={`${styles.header} ${headerStyle} ${isOpen ? styles.open : ''}`}
    >
      {block.type === 'heading_1' ? (
        <h2 className={NotionColor(header.color)}>{content()}</h2>
      ) : block.type === 'heading_2' ? (
        <h3 className={NotionColor(header.color)}>{content()}</h3>
      ) : (
        <h4 className={NotionColor(header.color)}>{content()}</h4>
      )}
      {block.children && (
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
