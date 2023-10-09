import { Video } from 'lib/types/blockType'
import styles from './videoBlock.module.scss'

export default function VideoBlock({ block }: { block: Video }) {
  if (block.video.type === 'external') {
    return (
      <iframe
        className={styles.video}
        src={block.video.external.url.replace('watch?v=', 'embed/')}
        title="YouTube video player"
        allowFullScreen
      />
    )
  }
  return <video className={styles.video} src={block.video.file.url} controls />
}
