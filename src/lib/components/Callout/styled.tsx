import styled from '@emotion/styled/macro'

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 3px;
  padding: 16px 16px 16px 12px;
  box-sizing: border-box;

  & > .content {
    margin-left: 8px;
    width: 100%;
  }

  &.gray {
    color: rgba(120, 119, 116, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.brown {
    color: rgba(159, 107, 83, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.orange {
    color: rgba(217, 115, 13, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.yellow {
    color: rgba(203, 145, 47, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.green {
    color: rgba(68, 131, 97, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.blue {
    color: rgba(51, 126, 169, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.purple {
    color: rgba(144, 101, 176, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.pink {
    color: rgba(193, 76, 138, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.red {
    color: rgba(212, 76, 71, 1) !important;
    border: 1px solid rgba(55, 53, 47, 0.16);
  }
  &.gray_background {
    background-color: rgba(241, 241, 239, 1) !important;
  }
  &.brown_background {
    background-color: rgba(244, 238, 238, 1) !important;
  }
  &.orange_background {
    background-color: rgba(251, 236, 221, 1) !important;
  }
  &.yellow_background {
    background-color: rgba(251, 243, 219, 1) !important;
  }
  &.green_background {
    background-color: rgba(237, 243, 236, 1) !important;
  }
  &.blue_background {
    background-color: rgba(231, 243, 248, 1) !important;
  }
  &.purple_background {
    background-color: rgba(244, 240, 247, 0.8) !important;
  }
  &.pink_background {
    background-color: rgba(249, 238, 243, 0.8) !important;
  }
  &.red_background {
    background-color: rgba(253, 235, 236, 1) !important;
  }
`
