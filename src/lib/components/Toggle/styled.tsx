import styled from '@emotion/styled/macro'

export const Container = styled.div`
  height: 24px;
  overflow: hidden;

  & > div {
    display: flex;
    gap: 4px;
  }

  & > .content > .button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    padding: 0;
    margin: 0;

    border: none;
    border-radius: 3px;
    background: none;

    svg {
      width: 11px;
      height: 11px;
      display: block;
      flex-shrink: 0;
      transition: transform 200ms ease-out 0s;
      transform: rotateZ(90deg);
      opacity: 1;
    }
  }

  &.open {
    height: auto;

    & > .content > .button > svg {
      transform: rotate(180deg);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    & > .content > .button:hover {
      background-color: rgba(55, 53, 47, 0.08);
    }
  }

  & > .children {
    padding-left: 24px;
  }
`
