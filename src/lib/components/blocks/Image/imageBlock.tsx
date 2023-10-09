import { Image } from 'lib/types/blockType'
import styles from './imageBlock.module.scss'

export default function ImageBlock({ block }: { block: Image }) {
  const url =
    block.image.type === 'file'
      ? block.image.file.url
      : block.image.external.url

  return (
    <div className={styles.image}>
      <img src={url} alt="image" />
    </div>
  )
}
