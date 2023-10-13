import styled from '@emotion/styled/macro'

export const Container = styled.div`
  width: 24px;
  height: 24px;

  & > div {
    & > img {
      width: 23.04px;
      height: 23.04px;

      object-fit: cover;
    }
  }
`
