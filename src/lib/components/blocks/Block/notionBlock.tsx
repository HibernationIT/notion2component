import { Block, Bookmark, BulletedListItem } from 'lib/types/blockType'
import BookmarkBlock from 'lib/components/blocks/Bookmark/bookmarkBlock'
import BulletedListItemBlock from 'lib/components/blocks/BulletedListItem/bulletedListItemBlock'
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
      case 'bulleted_list_item': {
        const bulletedListItem = block as BulletedListItem
        return <BulletedListItemBlock block={bulletedListItem} />
      }
      default:
        return <div />
    }
  }

  return <div className={styles.block}>{getBlock()}</div>
}
