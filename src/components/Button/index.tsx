import React, { ButtonHTMLAttributes, useState } from 'react';
import { Container } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
 const [selected, setSelected] = useState(false);

 return (
  <Container
   selected={selected}
   type="button"
   {...rest}
   onClick={() => setSelected(!selected)}
   className={`${selected}` && 'selected'}
  >
   {loading ? 'Carregando...' : children}
  </Container>
 );
};

export default Button;
