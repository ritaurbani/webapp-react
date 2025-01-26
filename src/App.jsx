import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import WriteReviewPage from './pages/WriteReviewPage';
import MovieDetails from './pages/MovieDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/reviews/create' element={<WriteReviewPage/>}/>
            <Route path='/movies:id' element={<MovieDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
