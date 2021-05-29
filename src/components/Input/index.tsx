import React, { InputHTMLAttributes, useState } from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: 'normal' | 'alert' | 'wrong';
}

const Input: React.FC<InputProps> = ({ label, state, ...rest }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [curentState, setcurentState] = useState('');
  const verifyInput = (value: string) => {
    isNull(value);
  };

  const isNull = (value: string) => {
    if (value.length === 0) {
      setcurentState('alert');
      setErrorMessage('Input está Vazio');
    }
  };

  return (
    <Container state={state}>
      <p>{errorMessage}</p>
      <label htmlFor={label}>
        <input
          onBlur={(e) => {
            verifyInput(e.target.value);
          }}
          name={label}
          {...rest}
        />
      </label>
    </Container>
  );
};

export default Input;
