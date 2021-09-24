import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/style.css';
import Routers from './modules/_routers/Routers';
import Footer from './modules/_shared/footer/Footer';
import Menu from './modules/_shared/menu/Menu';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routers></Routers>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
