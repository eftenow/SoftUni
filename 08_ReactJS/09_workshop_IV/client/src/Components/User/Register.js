import { useState } from "react";

export const Register = ({ onRegister }) => {
    const [data, setData] = useState({
        "username": "",
        "email": "",
        "password": "",
        "repeatPass": "",
        "gender": "male"
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        onRegister(data);
    }

    const onChange = (e) => {
        setData((currentData) => ({
            ...currentData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <section id="register">
            <form id="register-form" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        value={data.username}
                        onChange={onChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter Email"
                        name="email"
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
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input
                        id="repeatPass"
                        type="password"
                        placeholder="Repeat Password"
                        name="repeatPass"
                        value={data.repeatPass}
                        onChange={onChange}
                    />
                    <div className="gender">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={data.gender === "female"} 
                            onChange={onChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={data.gender === "male"} 
                            onChange={onChange}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <input
                        type="submit"
                        className="registerbtn button"
                        value="Register"
                    />
                    <div className="container signin">
                        <p>
                            Already have an account?<a href="#">Sign in</a>.
                        </p>
                    </div>
                </div>
            </form>
        </section>
    )
}