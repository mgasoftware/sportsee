import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Users from './Users/Users';
import Error from './Features/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Users />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
