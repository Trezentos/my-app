import React from 'react';

import { Container } from './styles';

const Item: React.FC = ({ children }) => {
 return (
  <Container>
   <h1>{children}</h1>
  </Container>
 );
};

export default Item;
