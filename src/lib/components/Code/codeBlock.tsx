import Highlight from 'react-highlight'
import 'highlight.js/styles/github.css'
import { Code } from '../../BlockType'
import RichTexts from '../RichText/richTexts'
import CaptionBlock from '../Caption/captionBlock'
import { Container } from './styled'

export default function CodeBlock({ block }: { block: Code }) {
  const data = block.code.rich_text.map((text) => text.plain_text)

  return (
    <>
      <Container>
        <div className="copyButton">
          <button
            onClick={() => {
              window.navigator.clipboard.writeText(data.join('')).then()
            }}
          >
            <svg role="graphics-symbol" viewBox="0 0 14 16" className="icon">
              <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
            </svg>
            복사
          </button>
        </div>
        <div className="content">
          <div>
            <Highlight className={block.code.language}>
              <RichTexts richTexts={block.code.rich_text} />
            </Highlight>
          </div>
        </div>
      </Container>
      {block.code.caption.length >= 1 && (
        <CaptionBlock caption={block.code.caption} />
      )}
    </>
  )
}
