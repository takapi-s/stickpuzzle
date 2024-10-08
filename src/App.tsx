import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';
import Game from './pages/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/numeris" element={<Home />} />
        <Route path="/numeris/rooms/:roomID" element={<Room />} />
        <Route path="/numeris/game/:roomID" element={<Game />} /> 
      </Routes>
    </Router>
  );
}

export default App;
