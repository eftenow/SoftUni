import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext.js";
import { userRegister } from "../../Services/userServices.js";

export const Register = () => {
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
        console.log(data);
        userRegister(data)
            .then((res) => {
                setUser(res);
                navigate('/')
            })
    }
    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        value={data.email}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={data.password}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                    />
                    <button type="submit">register</button>
                    <p className="message">
                        Already registered? <a href="#">Login</a>
                    </p>
                </form>
            </div>
        </section>
    )
}