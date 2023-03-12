import { BrowserRouter, Router } from 'react-router-dom';

import { Route , Routes , useLocation} from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';

import './App.css';

import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Game from './Components/game/Game';
import Events from './Components/events/Events';
import Nft from './Components/nft/Nft';
import Merchs from './Components/merchs/Merchs';
import Account from './Components/account/Account';
import Seedfund from './Components/seedfund/Seedfund';

function App() {
  const location = useLocation();
  const pathValue=location.pathname;

  useEffect(() => {
    
  },[pathValue]);
  return (
    <div className="App">
        {pathValue === "/admin"?"":<Header />}
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/game" element={<Game />} />
          <Route exect path="/events" element={<Events />} />
          <Route exect path="/nft" element={<Nft />} />
          <Route exect path="/merchs" element={<Merchs />} />
          <Route exect path="/account" element={<Account />} />
          <Route exect path="/seedfund" element={<Seedfund />} />
        </Routes>
        {pathValue === "/admin"?"":<Footer />}
    </div>
  );
}

export default App;
