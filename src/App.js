import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Board from './components/Board';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Speakers from './components/Speakers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Board />
      <Donation />
      <Speakers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
