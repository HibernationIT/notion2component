import styled from '@emotion/styled/macro'
import { NotionColor } from '../notionColor'

export const Container = styled.span`
  line-height: 1.5;
  white-space: pre;

  &.bold {
    font-weight: 700;
  }

  &.italic {
    font-style: italic;
  }

  &.underline {
    border-bottom: 1px solid;
  }

  &.strikethrough {
    text-decoration: line-through;
  }

  ${NotionColor}
`
