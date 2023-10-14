export interface RichText {
  type: 'text'
  text: {
    content: string
    link: string | null
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: string | null
}

export interface File {
  type: 'file'
  caption: RichText[]
  file: {
    url: string
    expiry_time: string
  }
}

export interface External {
  type: 'external'
  caption: RichText[]
  external: {
    url: string
  }
}

export interface Emoji {
  type: 'emoji'
  emoji: string
}

export type NotionBlock =
  | Bookmark
  | BulletedListItem
  | Callout
  | Code
  | ColumnList
  | Column
  | Divider
  | Equation
  | FileBlock
  | Header1
  | Header2
  | Header3
  | Image
  | NumberedListItem
  | Paragraph
  | Quote
  | Table
  | TableRow
  | ToDo
  | Toggle
  | Video

export interface DefaultBlock {
  object: 'block'
  id: string
  parent: {
    type: 'page_id'
    page_id: string
  }
  created_time: string
  last_edited_time: string
  created_by: object
  last_edited_by: object
  has_children: boolean
  archived: boolean
  children?: NotionBlock[]
}

export interface Bookmark extends DefaultBlock {
  type: 'bookmark'
  bookmark: {
    caption: RichText[]
    url: string
    icon: string | undefined
    title: string | undefined
    image: string | undefined
    description: string | undefined
  }
}

export interface BulletedListItem extends DefaultBlock {
  type: 'bulleted_list_item'
  bulleted_list_item: {
    rich_text: RichText[]
    color: string
  }
}

export interface Callout extends DefaultBlock {
  type: 'callout'
  callout: {
    rich_text: RichText[]
    icon: File | External | Emoji
    color: string
  }
}

export interface Code extends DefaultBlock {
  type: 'code'
  code: {
    caption: RichText[]
    rich_text: RichText[]
    language: string
  }
}

export interface ColumnList extends DefaultBlock {
  type: 'column_list'
  column_list: object
}

export interface Column extends DefaultBlock {
  type: 'column'
  column: object
}

export interface Divider extends DefaultBlock {
  type: 'divider'
  divider: object
}

export interface Equation extends DefaultBlock {
  type: 'equation'
  equation: {
    expression: string
  }
}

export interface FileBlock extends DefaultBlock {
  type: 'file'
  file: File | External
}

export interface Heading {
  rich_text: RichText[]
  color: string
  is_toggleable: boolean
}

export interface Header1 extends DefaultBlock {
  type: 'heading_1'
  heading_1: Heading
}

export interface Header2 extends DefaultBlock {
  type: 'heading_2'
  heading_2: Heading
}

export interface Header3 extends DefaultBlock {
  type: 'heading_3'
  heading_3: Heading
}

export interface Image extends DefaultBlock {
  type: 'image'
  image: File | External
}

export interface NumberedListItem extends DefaultBlock {
  type: 'numbered_list_item'
  numbered_list_item: {
    rich_text: RichText[]
    color: string
  }
}

export interface Paragraph extends DefaultBlock {
  type: 'paragraph'
  paragraph: {
    rich_text: RichText[]
    color: string
  }
}

export interface Quote extends DefaultBlock {
  type: 'quote'
  quote: {
    rich_text: RichText[]
    color: string
  }
}

export interface Table extends DefaultBlock {
  type: 'table'
  table: {
    table_width: number
    has_column_header: boolean
    has_row_header: boolean
  }
}

export interface TableRow extends DefaultBlock {
  type: 'table_row'
  table_row: {
    cells: RichText[][]
  }
}

export interface ToDo extends DefaultBlock {
  type: 'to_do'
  to_do: {
    rich_text: RichText[]
    checked: boolean
    color: string
  }
}

export interface Toggle extends DefaultBlock {
  type: 'toggle'
  toggle: {
    rich_text: RichText[]
    color: string
  }
}

export interface Video extends DefaultBlock {
  type: 'video'
  video: File | External
}
