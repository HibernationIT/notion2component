import styled from '@emotion/styled'

export const Container = styled.div`
  & > .external {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56%;

    iframe {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  & > video {
    width: 100%;
    height: 100%;
  }
`
