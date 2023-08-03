import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editGame, getSpecificGame } from "../../Services/gameServices";

const EditPage = ({ onEditGame }) => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  
  const onChange =(e) => {
      setGame(
        (currentGame) => ({...currentGame, [e.target.name]: e.target.value}) 
      )
  }

  useEffect(() => {
    const fetchGame = async () => {
      const currentGame = await getSpecificGame(gameId);
      setGame(currentGame);
    };
    fetchGame();
  }, [gameId]); 

  const onEditSubmit = (e)=>{
    e.preventDefault();
    onEditGame(gameId, game);
    navigate(`/catalogue`)
  }


  return (

    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={onEditSubmit} >
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" defaultValue value={game.title} onChange={onChange} />
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" defaultValue value={game.category} onChange={onChange} />
          <label htmlFor="levels">MaxLevel:</label>
          <input type="number" id="maxLevel" name="maxLevel" min={1} defaultValue value={game.maxLevel} onChange={onChange} />
          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="image" defaultValue value={game.image} onChange={onChange} />
          <label htmlFor="description">Summary:</label>
          <textarea name="description" id="summary" value={game.description} onChange={onChange} />
          <input className="btn submit" type="submit" defaultValue="Edit Game" />
        </div>
      </form>
    </section>
  );
}


export default EditPage;