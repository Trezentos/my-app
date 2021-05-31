import React from 'react';
import Input from '../../components/Input';

const Home: React.FC = () => {
  return (
    <div>
      <Input label="Nome" type="text" placeholder="Nome" />
      <Input label="Nome" type="checkbox" placeholder="Nome" />
    </div>
  );
};

export default Home;
