import styled from '@emotion/styled'

export const Container = styled.div`
  padding-left: 2px;

  & > .box {
    display: flex;
    align-items: center;
    width: 100%;

    & > .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 24px;
      height: 30px;
    }
    & > .content {
      max-width: 100%;
      white-space: pre-wrap;
      word-break: break-word;
      caret-color: rgb(55, 53, 47);
      padding: 3px 2px;
      text-align: left;
      flex-grow: 1;
    }

    &.checked {
      & > .checkbox {
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          background: rgb(35, 131, 226);
        }

        svg {
          width: 12px;
          height: 12px;
          display: block;
          fill: white;
          flex-shrink: 0;
        }
      }
    }

    &.notChecked {
      & > .checkbox {
        svg {
          width: 16px;
          height: 16px;
          display: block;
          flex-shrink: 0;
        }
      }
    }
  }

  & > .children {
    padding-left: 24px;
  }
`
