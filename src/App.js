import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


const App = () => {
  return(
    <div className='grid-container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;