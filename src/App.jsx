import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EcommerceProject from './pages/EcommerceProject';
import './styles/global.css';

function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar navigate={navigate} currentPath={currentPath} />
      {currentPath === '/' ? (
        <Home navigate={navigate} />
      ) : (
        <EcommerceProject navigate={navigate} />
      )}
      <Footer />
    </div>
  );
}

export default App;