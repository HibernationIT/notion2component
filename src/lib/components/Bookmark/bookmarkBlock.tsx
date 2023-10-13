import { Bookmark } from '../../types/blockType'
import CaptionBlock from '../Caption/captionBlock'
import { Container } from './styled'

export default function BookmarkBlock({ block }: { block: Bookmark }) {
  return (
    <Container>
      <a href={block.bookmark.url} className="bookmark" target="_blank">
        <div className="content">
          <p className="title">{block.bookmark.title}</p>
          <div className="description">
            <p>{block.bookmark.description}</p>
          </div>
          <div className="url">
            {block.bookmark.icon && (
              <img src={block.bookmark.icon} alt="icon" />
            )}
            <p>{block.bookmark.url}</p>
          </div>
        </div>
        <div className="image">
          {block.bookmark.image && (
            <img src={block.bookmark.image} alt="image" />
          )}
        </div>
      </a>
      {block.bookmark.caption.length >= 1 && (
        <CaptionBlock caption={block.bookmark.caption} />
      )}
    </Container>
  )
}
