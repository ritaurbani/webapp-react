import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetails from './pages/MovieDetailsPage';
import CreateMoviePage from './pages/CreateMoviePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:slug' element={<MovieDetails/>}/>
            <Route path='/movies/create' element ={<CreateMoviePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
