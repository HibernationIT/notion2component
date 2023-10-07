import styles from './richText.module.scss'
import { RichText as Type } from 'lib/types/blockType'
import RichText from './richText'

interface IProps {
  richTexts: Type[]
}

export default function RichTexts({ richTexts }: IProps) {
  const array = []

  for (let i = 0; i < richTexts.length; i++) {
    if (!richTexts[i].annotations.code) {
      array.push(<RichText key={i} richText={richTexts[i]} />)
    } else {
      const codes = []
      while (i < richTexts.length && richTexts[i].annotations.code) {
        codes.push(<RichText key={i} richText={richTexts[i]} />)
        i++
      }
      array.push(<code key={`c${i}`}>{codes}</code>)
    }
  }

  return <span className={styles.richTexts}>{array}</span>
}
