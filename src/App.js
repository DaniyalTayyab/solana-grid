import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import Mint from './pages/Mint/Mint';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/mint' element={<Mint />} />
      <Route
        exact
        path='*'
        render={() => <Navigate to='/home' replace={true} />}
      />
    </Routes>
  );
};

export default App;
