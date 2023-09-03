import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Genre from './Pages/Genre';
import Browse from './Pages/Browse';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Genre" element={<Genre />} />
          <Route path='/browse' element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
