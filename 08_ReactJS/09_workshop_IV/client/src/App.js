import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Navigation } from "./Components/Navigation.js";
import { Home } from './Components/Home.js';
import { Login } from './Components/User/Login.js';
import { Register } from './Components/User/Register.js';
import { Dashboard } from './Components/Meme/Dashboard.js';
import { Create } from './Components/Meme/Create.js';
import { Edit } from './Components/Meme/Edit.js';
import { Details } from './Components/Meme/Details.js';
import { Profile } from './Components/User/Profile.js';

import { createMeme, getAllMemes } from './Services/memeServices.js';
import { useLocalStorage } from './Hooks/useLocalStorage.js';
import { ProfileData, UserLogin, UserLogout, UserRegister } from './Services/userServices.js';

function App() {
  const [user, setUserAuth] = useLocalStorage("auth", {});
  const [memes, setMemes] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    getAllMemes()
      .then((memes) => setMemes(memes.data))
      .catch((error) => {
        console.error("Error fetching memes:", error);
      });
  }, []);

  const onLogin = (loginData) => {
    UserLogin(loginData)
      .then(res => {
        setUserAuth(res.data);
        navigate("/dashboard");
      })
  }

  const onRegister = (registerData) => {
    UserRegister(registerData)
      .then(res => {
        setUserAuth(res.data);
        navigate("/dashboard");
      })
  }

  const onLogout = () => {
    UserLogout()
      .then(setUserAuth({}));
  }

  const onCreate = (memeData) => {
    createMeme(memeData)
      .then((newMeme) => {
        setMemes((oldMemes) => [
          ...oldMemes,
          newMeme.data
        ])
        navigate(`/details/${newMeme.data._id}`);
      })
  }

  return (
    <div id="container">
      <Navigation user={user} onLogout={onLogout} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login onLogin={onLogin} />} />
          <Route path='/register' element={<Register onRegister={onRegister} />} />
          <Route path='/dashboard' element={<Dashboard memes={memes} />} />
          <Route path='/create' element={<Create onCreate={onCreate} />} />
          <Route path='/edit/:memeId' element={<Edit />} />
          <Route path='/details/:memeId' element={<Details />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </main>

      <footer className="footer">
        <p>Created by SoftUni Delivery Team</p>
      </footer>
    </div>

  );
}

export default App;
