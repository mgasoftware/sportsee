import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Users from './Users/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
