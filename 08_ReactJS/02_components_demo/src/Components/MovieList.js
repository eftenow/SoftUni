export const MovieList = (props) =>{

    return(
        <ul>
            {props.movies.map((m) => (
                <li key={m.id}>
                    <h4>Title: {m.movie}</h4>
                    <p>Rating: {m.rating}</p>
                </li>
                
            ))}
        </ul>
    )
}