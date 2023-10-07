import styles from './richText.module.scss'
import { RichText } from 'lib/types/blockType'
import NotionColor from 'lib/components/blocks/notionColor'

export default function RichText({ richText }: { richText: RichText }) {
  let style = styles.richText
  if (richText.annotations.bold) style += ` ${styles.bold}`
  if (richText.annotations.italic) style += ` ${styles.italic}`
  if (richText.annotations.underline) style += ` ${styles.underline}`
  if (richText.annotations.strikethrough) style += ` ${styles.strikethrough}`
  style += ` ${NotionColor(richText.annotations.color)}`

  return <span className={style}>{richText.plain_text}</span>
}
