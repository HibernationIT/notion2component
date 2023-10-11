import {
  Block,
  Bookmark,
  BulletedListItem,
  Callout,
  Code,
  Column,
  ColumnList,
  Equation,
  FileBlock as File,
  Header1,
  Header2,
  Header3,
  Image,
  NumberedListItem,
  Paragraph,
  Quote,
  Table,
  ToDo,
  Toggle,
  Video,
} from '../../../types/blockType'
import BookmarkBlock from '../Bookmark/bookmarkBlock'
import BulletedListItemBlock from '../BulletedListItem/bulletedListItemBlock'
import ParagraphBlock from '../Paragraph/paragraphBlock'
import CalloutBlock from '../Callout/calloutBlock'
import CodeBlock from '../Code/codeBlock'
import ColumnBlock from '../Column/columnBlock'
import ColumnListBlock from '../ColumnList/columnListBlock'
import DividerBlock from '../Divider/dividerBlock'
import EquationBlock from '../Equation/equationBlock'
import FileBlock from '../File/fileBlock'
import HeaderBlock from '../Header/headerBlock'
import ImageBlock from '../Image/imageBlock'
import NumberedListItemBlock from '../NumberedListItem/numberedListItemBlock'
import QuoteBlock from '../Quote/quoteBlock'
import TableBlock from '../Table/tableBlock'
import TodoBlock from '../Todo/todoBlock'
import ToggleBlock from '../Toggle/toggleBlock'
import VideoBlock from '../Video/videoBlock'
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
      case 'callout': {
        const callout = block as Callout
        return <CalloutBlock block={callout} />
      }
      case 'code': {
        const code = block as Code
        return <CodeBlock block={code} />
      }
      case 'column': {
        const column = block as Column
        return <ColumnBlock block={column} />
      }
      case 'column_list': {
        const columnList = block as ColumnList
        return <ColumnListBlock block={columnList} />
      }
      case 'divider': {
        return <DividerBlock />
      }
      case 'equation': {
        const equation = block as Equation
        return <EquationBlock block={equation} />
      }
      case 'file': {
        const file = block as File
        return <FileBlock block={file} />
      }
      case 'heading_1': {
        const heading = block as Header1
        return <HeaderBlock block={heading} />
      }
      case 'heading_2': {
        const heading = block as Header2
        return <HeaderBlock block={heading} />
      }
      case 'heading_3': {
        const heading = block as Header3
        return <HeaderBlock block={heading} />
      }
      case 'image': {
        const image = block as Image
        return <ImageBlock block={image} />
      }
      case 'numbered_list_item': {
        const numberedListItem = block as NumberedListItem
        return (
          <NumberedListItemBlock block={numberedListItem} number={numbered} />
        )
      }
      case 'quote': {
        const quote = block as Quote
        return <QuoteBlock block={quote} />
      }
      case 'table': {
        const table = block as Table
        return <TableBlock block={table} />
      }
      case 'to_do': {
        const toDo = block as ToDo
        return <TodoBlock block={toDo} />
      }
      case 'toggle': {
        const toggle = block as Toggle
        return <ToggleBlock block={toggle} />
      }
      case 'video': {
        const video = block as Video
        return <VideoBlock block={video} />
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
