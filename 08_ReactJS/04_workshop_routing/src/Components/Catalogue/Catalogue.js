import Game from "../Game/Game";

const Catalogue = ({games})=>{
    return (

        <section id="catalog-page">
          {console.log(games)}
          <h1>All Games</h1>
          {games.map(game => {

          return <Game key={game.id} game={game} />
        })}
          
          {!games && <h3 className="no-articles">No articles yet</h3> }
          
        </section>
      );
};

export default Catalogue;