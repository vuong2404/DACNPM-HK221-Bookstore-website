import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './forAuthorization.scss';
import DefaultLayout from './DefaultLayout';
import classNames from 'classnames/bind';
// import React, { Component } from 'react';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from "react";

import { Col, Row, Container, Form } from 'react-bootstrap';

import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import database from './userInfo'

const cx = classNames.bind(styles);

function LogIn() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                sessionStorage.setItem("user", JSON.stringify({ id: userData.id, user: userData.username, password: userData.password, fullname: userData.fullname, email: userData.email, phoneNum: userData.phoneNum, gender: userData.gender, birthDate: userData.birthDate, registerDate: userData.registerDate, address: userData.address }))
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