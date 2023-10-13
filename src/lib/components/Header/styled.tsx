import styled from '@emotion/styled'
import { NotionColor } from '../notionColor'

export const Container = styled.div`
  overflow: hidden;
  margin-bottom: 4px;

  &.heading_1 {
    height: 45px;
    margin-top: 32px;
  }
  &.heading_2 {
    height: 36px;
    margin-top: 22.5px;
  }
  &.heading_3 {
    height: 30px;
    margin-top: 16px;
  }

  & > h2,
  h3,
  h4 {
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: 600;
    line-height: 1.3;
    ${NotionColor};

    & > .content {
      padding: 0 2px;
    }

    & > .button {
      display: flex;
      position: relative;
      user-select: none;

      align-items: center;
      justify-content: center;

      margin-right: 2px;

      width: 22px;
      height: 24px;
      border-radius: 3px;
      transition: background 20ms ease-in 0s;
      cursor: pointer;
      background: none;
      border: none;

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
  }

  & > h2 {
    font-size: 30px;
  }
  & > h3 {
    font-size: 24px;
  }
  & > h4 {
    font-size: 20px;
  }

  &.open {
    height: auto;

    & .button > svg {
      transform: rotate(180deg);
    }
  }

  & > .children {
    padding-left: 24px;
  }

  @media (hover: hover) and (pointer: fine) {
    .button:hover {
      background-color: rgba(55, 53, 47, 0.08);
    }
  }
`
