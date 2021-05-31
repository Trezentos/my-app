import styled, { css } from 'styled-components';

interface InputProps {
  state?: 'normal' | 'alert' | 'wrong';
}

export const Container = styled.div<InputProps>`
  width: 50%;
  height: 32px;
  margin: 16px 25%;
  border-radius: 25px;
  position: relative;
  ${(props) =>
    props.state === 'normal' &&
    css`
      border: 1px solid green;
    `}

  ${(props) =>
    props.state === 'alert' &&
    css`
      border: 1px solid #ff5500;
    `}

  ${(props) =>
    props.state === 'wrong' &&
    css`
      border: 1px solid red;
    `}


  span {
    margin: 0 0 0 24px;
    position: absolute;
    top: 0;
    transform: translateY(-125%);
  }

  p {
    bottom: 0;
    font-size: 14px;
    margin: 0 0 0 24px;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    border-radius: 25px;
    padding: 0 24px;
  }
`;
