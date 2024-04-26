// HomePage.js
import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';


function Home() {
  return (
    <div>
      <Nav />
      <Header buttonText='Reserve a Table' />
      <Main />
    </div>
  );
}

export default Home;
