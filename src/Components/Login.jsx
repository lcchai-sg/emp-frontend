import React, { useState } from "react";
import "./style.css";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                <h2 className="mb-3 text-info">Login Page</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email:</strong>
                        </label>
                        <input
                            type="email"
                            name="email"
                            autoCapitalize="off"
                            placeholder="enter email"
                            className="form-control rounded-0"
                            onChange={(e) =>
                                setValues({ ...values, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password:</strong>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            className="form-control rounded-0"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button className="btn btn-success w-100 rounded-0 mb-2">
                        Log in
                    </button>
                    <div className="mb-1">
                        <input
                            type="checkbox"
                            name="tick"
                            id="tick"
                            className="me-2"
                        />
                        <label htmlFor="password">
                            Agree to term and conditions of website use
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
