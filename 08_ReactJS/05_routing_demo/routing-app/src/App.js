import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Starships } from './components/Starships.js';
import { Starship } from './components/Starship.js';
import { Movie } from './components/Movie.js';

function App() {
  return (

    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/starships' element={<Starships />} />
        <Route path='/starships/:id' element={<Starship />} />
        <Route path='/starships/:id/movies/:movieId' element={<Movie />} />

      </Routes>
    </>

  );
}

export default App;
