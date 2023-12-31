import { ToDo } from '../../BlockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { Container } from './styled'

export default function TodoBlock({ block }: { block: ToDo }) {
  return (
    <Container>
      <div className={`box ${block.to_do.checked ? 'checked' : 'notChecked'}`}>
        <div className="checkbox">
          <div>
            {block.to_do.checked ? (
              <svg role="graphics-symbol" viewBox="0 0 14 14">
                <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" />
              </svg>
            ) : (
              <svg role="graphics-symbol" viewBox="0 0 16 16">
                <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" />
              </svg>
            )}
          </div>
        </div>
        <div className="content">
          <RichTexts richTexts={block.to_do.rich_text} />
        </div>
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
