import { useContext, useState } from "react"
import { AuthContext } from "../../Context/authContext.js";
import { userLogin } from "../../Services/userServices.js";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [data, setData] = useState({
        "email": "",
        "password": ""
    });
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onChange = (e) => {
        setData(
            (state) => ({
                ...state,
                [e.target.name]: e.target.value
            })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        userLogin(data)
            .then((res) => {
                setUser(res);
                navigate('/')
            })
    }




    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={data.email}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={data.password}
                        onChange={onChange}
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <a href="/register">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
    )
}