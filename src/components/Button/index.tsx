import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 loading?: boolean;
 color?: 'orange' | 'blue' | 'red';
 border?: 'outlined' | 'solid';
}

const Button: React.FC<ButtonProps> = ({
 children,
 loading,
 color,
 border,
 ...rest
}) => {
 return (
  <Container type="button" {...rest} color={color} border={border}>
   {loading ? 'Carregando...' : children}
  </Container>
 );
};

export default Button;
