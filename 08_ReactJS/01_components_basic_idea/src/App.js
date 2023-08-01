import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>yooo</h1>
      <Counter count={0} />
      <Timer start={1} />
    </div>
    
  );
}

export default App;
