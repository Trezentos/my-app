import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: string;
  border?: 'outlined' | 'solid';
}

let DefinitiveColor: string;

const defineBorder = ({ border, color }: ButtonProps) => {
  switch (color) {
    case 'orange':
      DefinitiveColor = '#ffaa00';
      break;

    case 'blue':
      DefinitiveColor = '#33fafa';
      break;

    case 'red':
      DefinitiveColor = '#ff5555';
      break;

    default:
      DefinitiveColor = '#009900';
      break;
  }

  if (border === 'outlined') {
    return css`
      border: 1px solid ${DefinitiveColor};
      color: ${DefinitiveColor};
      background-color: transparent;
      transition: color, background-color 0.3s;
      &:hover {
        background-color: ${DefinitiveColor};
        color: #000;
        transition: color, background-color 0.3s;
      }
    `;
  }
  return css`
    background-color: ${DefinitiveColor};
  `;
};
const defineColor = () => {
  return css`
    background-color: ${DefinitiveColor};
  `;
};

export const Container = styled.button<ButtonProps>`
  ${(props) => {
    if (props.border) {
      return defineBorder({ border: props.border, color: props.color });
    }
    if (props.color) {
      return defineColor();
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
