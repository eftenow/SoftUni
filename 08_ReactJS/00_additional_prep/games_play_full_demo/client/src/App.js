import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Navigation } from './Components/Common/Navigation.js';
import { Home } from './Components/Common/Home.js';
import { UserRegister } from './Components/Users/UserRegister.js';
import { UserLogin } from './Components/Users/UserLogin.js';
import { Details } from './Components/Games/Details.js';
import { Edit } from './Components/Games/Edit.js';
import { Create } from './Components/Games/Create.js';
import { Dashboard } from './Components/Games/Dashboard.js';

function App() {
  return (
    <div id="box">
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route element={<Home />} path='/' />

          <Route element={<UserRegister />} path='/register' />
          <Route element={<UserLogin />} path='/login' />

          <Route element={<Dashboard />} path='/dashboard' />
          <Route element={<Details />} path='/details/:gameId' />
          <Route element={<Edit />} path='/edit/:gameId' />
          <Route element={<Create />} path='/create' />

        </Routes>
      </main>
    </div>

  );
}

export default App;
