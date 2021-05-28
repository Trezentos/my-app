import styled, { css } from 'styled-components';

interface ButtonColor {
 color?: 'orange' | 'blue' | 'red';
 border?: 'outlined' | 'solid';
}

const defineBorder = ({ border, color }: ButtonColor) => {
 if (border === 'outlined') {
  return css`
   border: 1px solid ${color};
   color: ${color};
   background-color: transparent;
   transition: color, background-color 0.3s;
   &:hover {
    background-color: ${color};
    color: #000;
    transition: color, background-color 0.3s;
   }
  `;
 }
 return css`
  background-color: ${color};
 `;
};
const defineColor = ({ color }: { color: 'orange' | 'blue' | 'red' }) => {
 return css`
  background-color: ${color};
 `;
};

export const Container = styled.button<ButtonColor>`
 ${(props) => {
  if (props.border) {
   return defineBorder({ border: props.border, color: props.color });
  }
  if (props.color) {
   return defineColor({ color: props.color });
  }

  return css`
   background-color: green;
  `;
 }};

 width: 100%;
 height: 80px;
 font-size: 32px;
 border-radius: 32px;
`;
