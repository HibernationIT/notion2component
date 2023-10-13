import styled from '@emotion/styled/macro'

export const Container = styled.div`
  min-height: 16px;
  padding: 3px 2px;
  word-wrap: anywhere;

  & > .children {
    padding-left: 24px;
  }
`
