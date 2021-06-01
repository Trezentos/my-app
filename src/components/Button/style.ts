import styled, { css } from 'styled-components';
import { shade, mix, saturate } from 'polished';

interface buttonProps {
 selected: boolean;
}

export const Container = styled.button<buttonProps>`
 background-color: crimson;

 height: 56px;
 width: 100%;
 margin-top: 16px;
 border-radius: 10px;
 font-weight: 500;
 border: 2px solid black;
 padding: 0 16px;
 transition: background 0.2s;

 ${(props) =>
  props.selected &&
  css`
   background-color: ${shade(0.3, 'crimson')};
  `}
`;
