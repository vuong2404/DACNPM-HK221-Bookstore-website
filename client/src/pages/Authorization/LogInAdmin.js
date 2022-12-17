import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './forAuthorization.scss';
import DefaultLayout from './DefaultLayout';
import classNames from 'classnames/bind';
// import React, { Component } from 'react';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from "react";
import Axios from "axios";

const cx = classNames.bind(styles);


function LogIn() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const AdminDatabase = [
        // admin account
        {
            username: "admin1",
            password: "admin123",
            code: "AD100"
        },
        {
            username: "admin2",
            password: "admin123",
            code: "AD200"
        },
    ];

    const errors = {
        username: "Invalid username!",
        password: "Invalid password!",
        code: "Invalid code!"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { username, password, code } = document.forms[0];

        // Find user login info
        const userData = AdminDatabase.find((user) => user.username === username.value);

        // Compare user info
        if (userData) {
            if (userData.password !== password.value) {
                // Invalid password
                setErrorMessages({ name: "password", message: errors.password });
            }
            else if (userData.code !== code.value) {
                // Invalid code
                setErrorMessages({ name: "code", message: errors.code });
            }
            else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "username", message: errors.username });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <form name="Login" onSubmit={handleSubmit}>
            <h2 class="header">Đăng nhập</h2>
            <div>
                <input type="text" name="username" placeholder="User name" required />
                {renderErrorMessage("username")}
            </div>

            <div>
                <input type="password" name="password" placeholder="Password" required />
                {renderErrorMessage("password")}
            </div>

            <div>
                <input type="text" name="code" placeholder="Mã nhân viên" required />
                {renderErrorMessage("code")}
            </div>

            <button className={cx('submit')} type="submit">
                Đăng nhập
            </button>

            <a href="./LogIn">
                <div class="goto" to="./LogIn">Đăng nhập với tư cách khách hàng</div>
            </a>
        </form>
    )

    return (
        <DefaultLayout>
            <div className={cx('authorization-wrapper')}>
                <div className={cx('form')}>
                    <div class="box">
                        {isSubmitted ?
                            <a href="./admin">
                                <button className={cx('submit')}>
                                    Đi vào trang quản lý
                                </button>
                            </a>
                            : renderForm}
                    </div>
                </div>
            </div>
        </DefaultLayout>

    )
}

export default LogIn;