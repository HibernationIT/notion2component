import NotionBlock from './blocks/Block/notionBlock'
import { Block } from '../types/blockType'
import styles from './NotionTemplate.module.scss'

export default function NotionTemplate({ blocks }: { blocks: Block[] }) {
  return (
    <div id={styles.notionTemplate}>
      {blocks.map((block, idx) => {
        let number = 1
        if (idx !== 0) {
          while (blocks[idx - number].type === 'numbered_list_item') {
            number++
          }
        }

        return <NotionBlock key={idx} block={block} numbered={number} />
      })}
    </div>
  )
}
