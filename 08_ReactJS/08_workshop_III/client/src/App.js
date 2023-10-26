import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header.js';
import { Catalogue } from './Components/Games/Catalogue.js';
import { Create } from './Components/Games/Create.js';
import { Edit } from './Components/Games/Edit.js';
import { Details } from './Components/Games/Details.js';
import { Login } from './Components/Login.js';
import { Register } from './Components/Register.js';
import { Home } from './Components/Home.js';
import { useEffect, useState } from 'react';
import { createGame, deleteGame, editGame, getAllGames } from './Services/gameService.js';
import { userLogin, userRegster } from './Services/authService.js';
import { useLocalStorage } from './Hooks/useLocalStorage.js';
import { UserContext } from './Components/Contexts/UserContext.js';

function App() {
  const [user, setUser] = useLocalStorage(null);
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const onLogin = (loginData) => {
    userLogin(loginData)
      .then(res => {
        setUser(res.data);
        navigate("/");
      })
  }

  const onRegister = (registerData) => {
    userRegster(registerData)
      .then(res => {
        setUser(res.data);
        navigate("/");
      })
  }
  const onLogout = () => {
    setUser(null);
    navigate("/");
  }

  const onGameCreate = (data) => {
    createGame(data)
      .then((newGame) => {
        setGames((oldGames) => {
          console.log(newGame);
          return [
            ...oldGames,
            newGame
          ]
        })
        navigate(`/details/${newGame._id}`);
      })
  }

  const onEditGame = (data) => {
    editGame(data)
      .then((editedGame) => {
        setGames((oldGames) => {
          return [
            ...oldGames.filter((game) => game._id !== editedGame._id),
            editedGame
          ];
        });
        navigate(`/details/${editedGame._id}`);
      })
  }

  const onDeleteGame = (gameId) => {
    deleteGame(gameId)
      .then(
        setGames((oldGames) => {
          return [
            ...oldGames.filter(game => game._id !== gameId)
          ]
        })
      )
      navigate('/catalogue');
  }


  useEffect(() => {
    getAllGames().then((gamesData) => {
      setGames(gamesData);
    });
  }, []);






  return (
    <UserContext.Provider value={{ user, onLogout, onRegister }}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home games={games} />} />
            <Route path='/catalogue' element={<Catalogue games={games} />} />
            <Route path='/details/:gameId' element={<Details onDeleteGame={onDeleteGame} />} />
            <Route path='/create' element={<Create onGameCreate={onGameCreate} />} />
            <Route path='/edit/:gameId' element={<Edit onEditGame={onEditGame} />} />
            <Route path='/login' element={<Login onLogin={onLogin} />} />
            <Route path='/register' element={<Register />} />
          </Routes>

        </main>
      </div>
    </UserContext.Provider>

  );
}

export default App;
