import { Video } from '../../types/blockType'
import { Container } from './styled'

export default function VideoBlock({ block }: { block: Video }) {
  return (
    <Container>
      {block.video.type === 'external' ? (
        <div className="external">
          <iframe
            src={block.video.external.url.replace('watch?v=', 'embed/')}
            title="YouTube video player"
            allowFullScreen
          />
        </div>
      ) : (
        <video src={block.video.file.url} controls />
      )}
    </Container>
  )
}
