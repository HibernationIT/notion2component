import styled from '@emotion/styled/macro'

export const Container = styled.div`
  position: relative;

  width: 100%;
  background: rgb(247, 246, 243);
  border-radius: 3px;
  box-sizing: border-box;

  & > .content {
    overflow-x: auto;

    & > div {
      display: inline-block;
      padding: 34px 16px 32px 32px;
    }

    pre {
      display: inline;
      margin: 0;
    }

    code {
      display: inline;
      padding: 0;
      font-family: SFMono-Regular, Menlo, Consolas, 'PT Mono', 'Liberation Mono',
        Courier, monospace;
      font-size: 85%;
      background: rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar {
      height: 10px;
      background: #edece9;
    }

    &::-webkit-scrollbar-thumb {
      background: #d3d1cb;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover > .copyButton {
      opacity: 100%;
    }
  }

  & > .copyButton {
    position: absolute;
    top: 6px;
    right: 6px;
    transition: opacity 250ms linear;
    opacity: 0;

    button {
      user-select: none;
      transition: background 20ms ease-in 0s;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      height: 25px;
      border-radius: 3px 0px 0px 3px;
      font-size: 11.5px;
      line-height: 1.2;
      padding: 4px 6px;
      color: rgb(55, 53, 47);
      background: rgb(55, 53, 47, 0.08);
      border: none;
      font-weight: 400;

      .icon {
        width: 16px;
        height: 16px;
        display: block;
        flex-shrink: 0;
        padding-right: 4px;
      }
    }
    button:active {
      background: rgb(55, 53, 47, 0.16);
    }
  }
`
