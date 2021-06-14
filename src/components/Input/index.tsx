import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: 'normal' | 'alert' | 'wrong';
}

interface InputParameters {
  value: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [curentState, setcurentState] = useState<'normal' | 'alert' | 'wrong'>(
    'normal',
  );

  const verifyType = useCallback(({ value, type }: InputParameters) => {
    if (value === type) {
      console.log('a');
    } else {
      console.log('b');
    }
  }, []);

  const verifyInput = useCallback(
    ({ value, type }: InputParameters) => {
      fieldIsNull(value);
      verifyType({ type, value });
    },
    [verifyType],
  );

  const fieldIsNull = (value: string) => {
    if (value.length === 0) {
      setcurentState('alert');
      setErrorMessage('Input está Vazio');
    } else {
      setcurentState('normal');
      setErrorMessage('');
    }
  };

  return (
    <Container state={curentState}>
      <span>{label}</span>
      <label htmlFor={label}>
        <input
          onBlur={(e) => {
            verifyInput({ type: e.target.type, value: e.target.value });
          }}
          name={label}
          {...rest}
        />
        <p>{errorMessage}</p>
      </label>
    </Container>
  );
};

export default Input;
