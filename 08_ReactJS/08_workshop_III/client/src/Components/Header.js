import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./Contexts/UserContext.js";

export const Header = () => {
    const { user, onLogout } = useContext(UserContext);

    return (
        <header>
            <h1>
                <Link to="/" className="home">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/catalogue">All games</Link>
                {
                    user
                        ?
                        <div id="user">
                            <Link to="/create">Create Game</Link>
                            <a href="#" onClick={onLogout}>Logout</a>
                        </div>
                        :
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                }


            </nav>
        </header>

    )
}