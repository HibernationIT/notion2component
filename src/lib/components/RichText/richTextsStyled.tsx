import styled from '@emotion/styled'

export const Container = styled.div`
  display: inline;
  max-width: 100%;
  width: 100%;
  caret-color: rgb(55, 53, 47);
  text-align: left;

  & > code {
    font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono',
      Courier, monospace;
    line-height: normal;
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;

    * {
      border-color: #eb5757;
    }
  }
`
