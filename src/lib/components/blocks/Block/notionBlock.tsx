import {
  Block,
  Bookmark,
  BulletedListItem,
  Callout,
  Code,
  Paragraph,
} from 'lib/types/blockType'
import BookmarkBlock from 'lib/components/blocks/Bookmark/bookmarkBlock'
import BulletedListItemBlock from 'lib/components/blocks/BulletedListItem/bulletedListItemBlock'
import styles from './notionBlock.module.scss'
import ParagraphBlock from '../Paragraph/paragraphBlock'
import CalloutBlock from '../Callout/calloutBlock'
import CodeBlock from '../Code/codeBlock'

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
      case 'callout': {
        const callout = block as Callout
        return <CalloutBlock block={callout} />
      }
      case 'code': {
        const code = block as Code
        return <CodeBlock block={code} />
      }
      case 'paragraph': {
        const paragraph = block as Paragraph
        return <ParagraphBlock block={paragraph} />
      }
      default:
        return <div />
    }
  }

  return <div className={styles.block}>{getBlock()}</div>
}
