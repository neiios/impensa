import styled from "styled-components";
import theme from "../../../theme/Index";
import { device } from "../../../mediaQueries";

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0;
  margin: 0;
  width: 100%;
  table-layout: fixed;
  @media ${device.laptop} {
    border: 0;
  }
`;

export const Colgroup = styled.colgroup``;

export const Thead = styled.thead`
  @media ${device.laptop} {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const Tr = styled.tr`
  text-align: center;
  &:hover {
    background: ${theme.bg.lightestBlue};
  }
  @media ${device.laptop} {
    border-bottom: 1px solid rgba(88, 101, 242, 0.1);
    display: block;
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Th = styled.th`
  padding: 10px 0 10px 0;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  &:nth-child(3) {
    text-align: left;
  }
`;

export const Tbody = styled.tbody`
  border: none !important;
`;

export const Td = styled.td`
  padding: 1em 0 1em 0;
  text-align: center;
  @media ${device.laptop} {
    display: block;
    font-size: 0.8em;
    text-align: right !important;
    padding: 10px;
    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
  &:nth-child(3) {
    text-align: left;
  }
`;
