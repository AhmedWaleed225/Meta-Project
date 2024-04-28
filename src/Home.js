// HomePage.js
import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Maiin from './Maiin';


function Home() {
  return (
    <div>
      <Nav />
      <Header buttonText='Reserve a Table' />
      <Maiin />
    </div>
  );
}

export default Home;
