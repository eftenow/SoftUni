import Catalogue from './Components/Catalogue/Catalogue';
import CreatePage from './Components/CreatePage/CreatePage';
import EditPage from './Components/EditPage/EditPage';
import GameDetails from './Components/GameDetails/GameDetails';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { Routes, Router, Route } from 'react-router-dom';
import { createNewGame, deleteGame, editGame, getAllGames } from './Services/gameServices';
import { useEffect, useState } from 'react';

function App() {
    const [games, setGames] = useState([]);


    useEffect(() => {
        const fetchgames = async () => {
            const allGamesObject = await getAllGames();
            const allGamesArray = Object.entries(allGamesObject).map(([id, game]) => ({ id, ...game }));
            setGames(allGamesArray);
        }
        fetchgames();
    }, []);

    const onCreateGame = async (gameData) => {
        const newGame = await createNewGame(gameData);
        setGames(prevGames => [...prevGames, newGame]);
    }

    const onDeleteGame = async (gameId) => {
        await deleteGame(gameId);
        setGames(prevGames => prevGames.filter((x) => x._id != gameId));
    }

    const onEditGame = async (gameId, editedGame) => {
        const updatedGame = await editGame(gameId, editedGame);
        setGames(prevGames => prevGames.map((x) => x._id == gameId ? updatedGame : x));
    }


    return (
        <>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home games={games} />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-page' element={<CreatePage onCreateGame={onCreateGame} />} />
                        <Route path='/catalogue/:gameId/edit' element={<EditPage onEditGame={onEditGame}/>} />
                        <Route path='/catalogue/:gameId' element={<GameDetails onDeleteGame={onDeleteGame} />} />
                        <Route path='/catalogue' element={<Catalogue games={games} />} />

                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
