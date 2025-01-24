import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
