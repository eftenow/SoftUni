import './App.css';
import './styles.css';

import { Footer } from './Components/Footer.js';
import { Header } from './Components/Header.js';
import { UserCards } from './Components/Users/UserCards.js';

function App() {

  return (
    <>
      <Header />
      <main>
        <UserCards />
      </main>
      <Footer />
    </>
  );
}

export default App;
