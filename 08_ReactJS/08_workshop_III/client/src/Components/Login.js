import { useState } from "react"
import { Link } from "react-router-dom";


export const Login = ( {onLogin}) => {
    const [loginData, setLoginData] = useState({
        "email": "",
        "password": "",
    });

    const onChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(loginData);
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={loginData.email}
                        onChange={onChange}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password"
                        id="login-password"
                        name="password"
                        value={loginData.password}
                        onChange={onChange} />


                    <input type="submit"
                        className="btn submit"
                        defaultValue="Submit"
                    />


                    <p className="field">
                        <span>
                            If you don't have profile click <Link href="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}