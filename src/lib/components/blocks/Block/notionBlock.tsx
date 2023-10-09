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
} from 'lib/types/blockType'
import BookmarkBlock from 'lib/components/blocks/Bookmark/bookmarkBlock'
import BulletedListItemBlock from 'lib/components/blocks/BulletedListItem/bulletedListItemBlock'
import ParagraphBlock from 'lib/components/blocks/Paragraph/paragraphBlock'
import CalloutBlock from 'lib/components/blocks/Callout/calloutBlock'
import CodeBlock from 'lib/components/blocks/Code/codeBlock'
import ColumnBlock from 'lib/components/blocks/Column/columnBlock'
import ColumnListBlock from 'lib/components/blocks/ColumnList/columnListBlock'
import DividerBlock from 'lib/components/blocks/Divider/dividerBlock'
import EquationBlock from 'lib/components/blocks/Equation/equationBlock'
import FileBlock from 'lib/components/blocks/File/fileBlock'
import HeaderBlock from 'lib/components/blocks/Header/headerBlock'
import ImageBlock from 'lib/components/blocks/Image/imageBlock'
import NumberedListItemBlock from 'lib/components/blocks/NumberedListItem/numberedListItemBlock'
import QuoteBlock from 'lib/components/blocks/Quote/quoteBlock'
import TableBlock from 'lib/components/blocks/Table/tableBlock'
import TodoBlock from 'lib/components/blocks/Todo/todoBlock'
import ToggleBlock from 'lib/components/blocks/Toggle/toggleBlock'
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
