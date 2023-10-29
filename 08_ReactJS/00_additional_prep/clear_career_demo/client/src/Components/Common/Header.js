import { useContext } from "react"
import { AuthContext } from "../../Context/authContext.js"
import { UserLogout } from "../../Services/userServices.js";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        UserLogout(user.accessToken);
        setUser({});
        navigate('/');
    }

    return (
        <header>
            <a id="logo" href="/">
                <img id="logo-img" src="./images/logo.jpg" alt="" />
            </a>
            <nav>
                <div>
                    <a href="/dashboard">Dashboard</a>
                </div>
                {
                    user.accessToken
                        ?
                        <div className="user">
                            <Link to="/create">Create Offer</Link>
                            <a href="#" onClick={onLogout}>Logout</a>
                        </div>
                        :
                        <div className="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                }
            </nav>
        </header>
    )
}