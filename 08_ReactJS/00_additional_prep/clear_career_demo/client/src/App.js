import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from './Hooks/useAuth.js';


import { Header } from './Components/Common/Header.js';
import { Home } from './Components/Common/Home.js'
import { Dashboard } from './Components/Common/Dashboard.js';

import { Register } from './Components/User/Register.js';
import { Login } from './Components/User/Login.js';

import { Create } from './Components/Offer/Create.js';
import { Details } from './Components/Offer/Details.js';
import { Edit } from './Components/Offer/Edit.js';
import { useEffect, useState } from 'react';
import { createOffer, deleteOffer, editOffer, getAllServices } from './Services/offerServices.js';
import { AuthContext } from './Context/authContext.js';


function App() {
  const [offers, setOffers] = useState([]);
  const [user, setUser] = useAuth("auth", {});
  const navigate = useNavigate();

  useEffect(
    () => {
      getAllServices()
        .then(res => res.json())
        .then(result => setOffers(result))
    }, []
  )

  const onCreate = (offerData) => {
    createOffer(offerData, user.accessToken)
      .then(createdOffer => {
        setOffers((prevOffers) => ([
          ...prevOffers,
          createdOffer
        ]))
        navigate('/dashboard');
      })
  }

  const onDelete = async (offerId) => {
    await deleteOffer(offerId, user.accessToken)

    setOffers((prevOffers) => {
      return prevOffers.filter(x => x._id !== offerId);
    })

    navigate("/dashboard");
  }

  const onEdit = (offerData, offerId) => {
    editOffer(offerData, offerId, user.accessToken)
      .then(editedOffer => {
        setOffers((prevOffers) => prevOffers.map(x => x._id === offerId ? editedOffer : x));
      })
    navigate(`/details/${offerId}`);
  }


  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <div id="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard offers={offers} />} />

              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />

              <Route path='/create' element={<Create onCreate={onCreate} />} />
              <Route path='/details/:offerId' element={<Details onDelete={onDelete} />} />
              <Route path='/edit/:offerId' element={<Edit onEdit={onEdit} />} />

            </Routes>
          </main>
        </div >
      </AuthContext.Provider>
      <footer>
        <p>@ClearCareer</p>
      </footer>
    </>

  );
}

export default App;
