import { Callout } from '../../types/blockType'
import IconBlock from '../Icon/iconBlock'
import RichTexts from '../RichText/richTexts'
import { Container } from './styled'

export default function CalloutBlock({ block }: { block: Callout }) {
  return (
    <Container className={block.callout.color}>
      <IconBlock icon={block.callout.icon} />
      <div className="content">
        <RichTexts richTexts={block.callout.rich_text} />
      </div>
    </Container>
  )
}
