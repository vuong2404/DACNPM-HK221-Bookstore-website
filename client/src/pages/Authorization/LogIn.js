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
    // handleLogin = () => {
    //     console.log('username : ', this.state.username, 'password : ', this.state.password);

    //     console.log('all state ', this.state)
    // }
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        //customer account
        {
            username: "username1",
            password: "password1@",
        },
        {
            username: "username2",
            password: "password2@",
        },
        {
            username: "username3",
            password: "password3@",
        },
        {
            username: "username4",
            password: "password4@",
        },
        {
            username: "username5",
            password: "password5@",
        },
        {
            username: "username6",
            password: "password6@",
        },
        {
            username: "username7",
            password: "password7@",
        },
        {
            username: "username8",
            password: "password8@",
        },
        {
            username: "username9",
            password: "password9@",
        },
        {
            username: "username10",
            password: "password10@",
        },
    ];

    const errors = {
        username: "Invalid username!",
        password: "Invalid password!"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { username, password } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === username.value);

        // Compare user info
        if (userData) {
            if (userData.password !== password.value) {
                // Invalid password
                setErrorMessages({ name: "password", message: errors.password });
            } else {
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
            <button className={cx('submit')} type="submit">
                Đăng nhập
            </button>
            <a href="./Forgot">
                <div class="goto">Quên mật khẩu</div>
            </a>
            <a href="./Register-1">
                <div class="goto" to="./Register-1">Tạo tài khoản mới</div>
            </a>
            <a href="./LogInAdmin">
                <div class="goto" to="./LogInAdmin">Đăng nhập với tư cách quản lý</div>
            </a>
        </form>
    )

    return (
        <DefaultLayout>
            <div className={cx('authorization-wrapper')}>
                <div className={cx('form')}>
                    <div class="box">
                        {isSubmitted ?
                            <a href="./">
                                <button className={cx('submit')}>
                                    Đi vào trang chủ
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