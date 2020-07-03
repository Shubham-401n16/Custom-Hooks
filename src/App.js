import React from 'react';
import ToDo from './components/ToDo';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/styles.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;