import React from 'react';

import Nav from './Nav';
import Header from './Header';
import Main from './Main';


function Reserve() {
  return (
    <div>
      <Nav />
      <Header showButton={false}/>
      <Main />
    </div>
  );
}

export default Reserve;
