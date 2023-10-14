import { useState } from 'react'
import { Toggle } from '../../BlockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { Container } from './styled'

export default function ToggleBlock({ block }: { block: Toggle }) {
  const [isOpen, setOpen] = useState(true)

  return (
    <Container className={isOpen ? 'open' : ''}>
      <div className="content">
        <button className="button" onClick={() => setOpen((state) => !state)}>
          <svg role="graphics-symbol" viewBox="0 0 100 100">
            <polygon points="5.9,88.2 50,11.8 94.1,88.2 " />
          </svg>
        </button>
        <RichTexts richTexts={block.toggle.rich_text} />
      </div>
      {block.has_children && (
        <div className="children">
          {block.children &&
            block.children.map((child, idx) => (
              <NotionBlock key={idx} block={child} />
            ))}
        </div>
      )}
    </Container>
  )
}
