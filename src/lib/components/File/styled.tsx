import styled from '@emotion/styled/macro'

export const Container = styled.a`
  display: flex;
  align-items: center;

  width: 100%;
  text-decoration: none;
  color: inherit;

  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 2px;

  & > div {
    width: 21.6px;
    height: 30px;
    svg {
      width: 100%;
      height: 100%;
      display: block;
      flex-shrink: 0;
    }
  }
  span {
    font-size: 16px;
    line-height: 20px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(55, 53, 47, 0.08);
    }
  }
`
