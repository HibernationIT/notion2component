import { RichText as Type } from '../../../types/blockType'
import NotionColor from '../notionColor'
import styles from './richText.module.scss'

export default function RichText({ richText }: { richText: Type }) {
  let style = styles.richText
  if (richText.annotations.bold) style += ` ${styles.bold}`
  if (richText.annotations.italic) style += ` ${styles.italic}`
  if (richText.annotations.underline) style += ` ${styles.underline}`
  if (richText.annotations.strikethrough) style += ` ${styles.strikethrough}`
  if (NotionColor(richText.annotations.color))
    style += ` ${NotionColor(richText.annotations.color)}`

  return <span className={style}>{richText.plain_text}</span>
}
