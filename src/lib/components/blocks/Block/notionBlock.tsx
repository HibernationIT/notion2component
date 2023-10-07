import { Block, Bookmark } from 'lib/type/blockType'
import BookmarkBlock from 'lib/components/blocks/Bookmark/bookmarkBlock'
import styles from './notionBlock.module.scss'

interface IProps {
  block: Block
  numbered?: number
}

export default function NotionBlock({ block, numbered }: IProps) {
  function getBlock() {
    switch (block.type) {
      case 'bookmark': {
        const bookmark = block as Bookmark
        return <BookmarkBlock block={bookmark} />
      }
      default:
        return <div />
    }
  }

  return <div className={styles.block}>{getBlock()}</div>
}
