import { Emoji, External, File } from '../../types/blockType'
import EmojiBlock from './emojiBlock'
import ExternalBlock from './externalBlock'
import FileBlock from './fileBlock'

interface IPorps {
  icon: Emoji | External | File
}

export default function IconBlock({ icon }: IPorps) {
  if (icon.type === 'emoji') return <EmojiBlock emoji={icon} />
  if (icon.type === 'external') return <ExternalBlock external={icon} />
  if (icon.type === 'file') return <FileBlock file={icon} />
  return <div />
}
