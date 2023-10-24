import logo from './logo.svg';
import './App.css';
import { Timer } from './Components/Timer';
import { Button } from './Components/Button';
import { MovieList } from './Components/MovieList';

function App() {
  const listOfMovies = [{"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"},{"id":2,"movie":"The Godfather","rating":9.2,"image":"images/godfather.jpg","imdb_url":"https://www.imdb.com/title/tt0068646/"},{"id":3,"movie":"The Dark Knight","rating":9,"image":"images/dark_knight.jpg","imdb_url":"https://www.imdb.com/title/tt0468569/"},{"id":4,"movie":"Pulp Fiction","rating":8.9,"image":"images/pulp_fiction.jpg","imdb_url":"https://www.imdb.com/title/tt0110912/"},{"id":5,"movie":"The Lord of the Rings: The Return of the King","rating":9,"image":"images/lotr_return_king.jpg","imdb_url":"https://www.imdb.com/title/tt0167260/"},{"id":6,"movie":"The Good, the Bad and the Ugly","rating":8.8,"image":"images/good_bad_ugly.jpg","imdb_url":"https://www.imdb.com/title/tt0060196/"},{"id":7,"movie":"Fight Club","rating":8.8,"image":"images/fight_club.jpg","imdb_url":"https://www.imdb.com/title/tt0137523/"},{"id":8,"movie":"The Lord of the Rings: The Fellowship of the Ring","rating":8.8,"image":"images/lotr_fellowship.jpg","imdb_url":"https://www.imdb.com/title/tt0120737/"},{"id":9,"movie":"Forrest Gump","rating":8.8,"image":"images/forrest_gump.jpg","imdb_url":"https://www.imdb.com/title/tt0109830/"},{"id":10,"movie":"Inception","rating":8.8,"image":"images/inception.jpg","imdb_url":"https://www.imdb.com/title/tt1375666/"}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width='200px' />
        <div>
          <h2>TIMERS</h2>
          <Timer />
          <Timer
            hours={1}
            minutes={2}
            seconds={22} />
        </div>

        <div>
          <h2>Buttons</h2>
          <Button />
        </div>

        <div>
          <h2>Movies List</h2>
          <MovieList movies={listOfMovies} />
        </div>

        

      </header>
    </div>
  );
}

export default App;
