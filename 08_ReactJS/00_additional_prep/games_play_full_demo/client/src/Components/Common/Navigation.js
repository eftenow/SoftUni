import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/dashboard">All games</Link>
                {/* Logged-in users */}
                <div id="user">
                    <Link to="/create">Create Game</Link>
                    <a href="#">Logout</a>
                </div>
                {/* Guest users */}
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}