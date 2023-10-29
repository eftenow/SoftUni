import { useState } from "react"

export const Login = ({ onLogin }) => {
    const [data, setData] = useState({
        "email": "",
        "password": ""
    });

    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(data);
    }

    const onChange = (e) =>{
        setData((currentData)=>({
            ...currentData,
            [e.target.name] : e.target.value
        }))
    }

    return (
        <section id="login">
            <form id="login-form" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        type="text"
                        value={data.email}
                        onChange={onChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={data.password}
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        defaultValue="Login"
                    />
                    <div className="container signin">
                        <p>
                            Dont have an account?<a href="#">Sign up</a>.
                        </p>
                    </div>
                </div>
            </form>
        </section>
    )
}