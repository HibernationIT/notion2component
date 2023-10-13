import { useState } from 'react'
import { Header1, Header2, Header3 } from '../../types/blockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { Container } from './styled'

interface IProps {
  block: Header1 | Header2 | Header3
}

export default function HeaderBlock({ block }: IProps) {
  const [isOpen, setOpen] = useState(true)
  const header =
    block.type === 'heading_1'
      ? (block as Header1).heading_1
      : block.type === 'heading_2'
      ? (block as Header2).heading_2
      : (block as Header3).heading_3

  function content() {
    return (
      <>
        {header.is_toggleable && (
          <button className="button" onClick={() => setOpen((state) => !state)}>
            <svg role="graphics-symbol" viewBox="0 0 100 100">
              <polygon points="5.9,88.2 50,11.8 94.1,88.2 " />
            </svg>
          </button>
        )}
        <div className="content">
          <RichTexts richTexts={header.rich_text} />
        </div>
      </>
    )
  }

  return (
    <Container className={`${block.type} ${isOpen ? 'open' : ''}`}>
      {block.type === 'heading_1' ? (
        <h2 className={header.color}>{content()}</h2>
      ) : block.type === 'heading_2' ? (
        <h3 className={header.color}>{content()}</h3>
      ) : (
        <h4 className={header.color}>{content()}</h4>
      )}
      {block.children && (
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
