import { Link } from "react-router-dom"

export const Navigation = ({ user, onLogout }) => {
    const isAuthenticated = user && user.accessToken !== undefined;
    return (
        <nav>
            <Link to="/dashboard">All Memes</Link>
            {
                isAuthenticated
                    ? <div className="user">
                        <Link to="/create">Create Meme</Link>
                        <div className="profile">
                            <span>
                                Welcome, {user.email}
                            </span>
                            <Link to="/profile">My Profile</Link>
                            <Link onClick={onLogout}>Logout</Link>
                        </div>
                    </div>
                    :
                    <div className="guest">
                        <div className="profile">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <Link className="active" to="/">
                            Home Page
                        </Link>
                    </div>
            }

        </nav>
    )
}