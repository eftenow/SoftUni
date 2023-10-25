import { Header } from './components/Header.js';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.js';
import { Edit } from './components/Games/Edit.js';
import { Details } from './components/Games/Details.js';
import { Catalogue } from './components/Games/Catalogue.js';
import { Create } from './components/Games/Create.js';
import { Register } from './components/User/Register.js';
import { Login } from './components/User/Login.js';
import { useEffect, useState, useId } from 'react';
import uniqid from 'uniqid';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/data/games")
      .then(res => res.json())
      .then(result => setGames(result))
  }, [])

  const submitComment = (comment, gameId) => {
    comment.id = uniqid();
    const game = games.find((g) => g._id === gameId)
    const comments = game.comments || [];
    comments.push(comment);

    setGames((currentGames) => ([
      ...currentGames.filter(g => g._id !== gameId),
      { ...game, comments }
    ]))
  }


  const editGame = (updatedGame, id) => {
    updatedGame._id = id;

    setGames((prevGames) => [
      ...prevGames.filter((game) => game._id !== id),
      updatedGame
    ]);
  }

  const createGame = (newGame) => {
    newGame._id = uniqid()
    setGames(
      (currentGames) => ([
        ...currentGames,
        newGame
      ])
    )

  }



  return (
    <div id='box'>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home games={games} />} />
          <Route path='/catalogue' element={<Catalogue games={games} />} />
          <Route path='/details/:gameId' element={<Details games={games} onSubmit={submitComment} />} />
          <Route path='/create' element={<Create onCreate={createGame} />} />
          <Route path='/edit/:gameId' element={<Edit games={games} onEdit={editGame} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
