import { Image } from '../../types/blockType'
import { Container } from './styled'
import CaptionBlock from '../Caption/captionBlock'

export default function ImageBlock({ block }: { block: Image }) {
  const url =
    block.image.type === 'file'
      ? block.image.file.url
      : block.image.external.url

  return (
    <>
      <Container>
        <img src={url} alt="image" />
      </Container>
      {block.image.caption.length >= 1 && (
        <CaptionBlock caption={block.image.caption} />
      )}
    </>
  )
}
