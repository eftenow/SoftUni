import { useContext, useState } from "react";
import { UserContext } from "./Contexts/UserContext.js";
import { Link } from "react-router-dom";

export const Register = () => {
    const [registerData, setRegisterData] = useState({
        "email": "",
        "password": "",
        "confirm-password": ""
    });

    const { onRegister } = useContext(UserContext);

    const onChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (registerData['password'] !== registerData["confirm-password"]) {
            alert('Passwords do not match!')
            console.log('Passwords do not match!');
            return
        } else {
            const updatedRegisterData = { ...registerData };
            delete updatedRegisterData['confirm-password'];

            onRegister(registerData);
        }

    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={registerData.email}
                        onChange={onChange}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        value={registerData.password}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        value={registerData['confirm-password']}
                    />

                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}