import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1 className='text-center m-3 text-primary display-3'>{title}</h1>
    </header>
  );
};

export default Header;
