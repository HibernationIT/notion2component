import { RichText as Type } from '../../types/blockType'
import { Container } from './richTextStyled'

export default function RichText({ richText }: { richText: Type }) {
  let className = ''
  if (richText.annotations.bold) className += ' bold'
  if (richText.annotations.italic) className += ' italic'
  if (richText.annotations.underline) className += ' underline'
  if (richText.annotations.strikethrough) className += ' strikethrough'

  return (
    <Container className={`${className} ${richText.annotations.color}`}>
      {richText.plain_text}
    </Container>
  )
}
