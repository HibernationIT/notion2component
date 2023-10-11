import { Bookmark } from '../../../types/blockType'
import styles from './bookmarkBlock.module.scss'
import CaptionBlock from '../Caption/captionBlock'

export default function BookmarkBlock({ block }: { block: Bookmark }) {
  return (
    <>
      <a href={block.bookmark.url} className={styles.bookmark} target="_blank">
        <div className={styles.content}>
          <p className={styles.title}>{block.bookmark.title}</p>
          <div className={styles.description}>
            <p>{block.bookmark.description}</p>
          </div>
          <div className={styles.url}>
            {block.bookmark.icon && (
              <img src={block.bookmark.icon} alt="icon" />
            )}
            <p>{block.bookmark.url}</p>
          </div>
        </div>
        <div className={styles.image}>
          {block.bookmark.image && (
            <img src={block.bookmark.image} alt="image" />
          )}
        </div>
      </a>
      {block.bookmark.caption.length >= 1 && (
        <CaptionBlock caption={block.bookmark.caption} />
      )}
    </>
  )
}
