import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './forAuthorization.scss';
import DefaultLayout from './DefaultLayout';
import classNames from 'classnames/bind';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from "react";
import Axios from "axios";

const cx = classNames.bind(styles);




function Register2() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "username1",
            password: "password1@"
        },
        {
            username: "username2",
            password: "password2@"
        },
        {
            username: "username3",
            password: "password3@"
        },
        {
            username: "username4",
            password: "password4@"
        },
        {
            username: "username5",
            password: "password5@"
        },
        {
            username: "username6",
            password: "password6@"
        },
        {
            username: "username7",
            password: "password7@"
        },
        {
            username: "username8",
            password: "password8@"
        },
        {
            username: "username9",
            password: "password9@"
        },
        {
            username: "username10",
            password: "password10@"
        },
    ];

    const errors = {
        username: "Username already exists",
        password2: "Those passwords didn’t match. Try again."
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { username, password1, password2 } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === username.value);

        // Compare user info
        if (userData) {
            setErrorMessages({ name: "username", message: errors.username });
        }
        else {
            if (password1.value !== password2.value) {
                // password did not match
                setErrorMessages({ name: "password2", message: errors.password2 });
            } else {
                setIsSubmitted(true);
            }
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <form action="./" onSubmit={handleSubmit}>
            <h2 class="header">Đăng ký</h2>
            <br></br>
            <div>
                <input type="text" name="username" placeholder="User name" required />
                {renderErrorMessage("username")}
            </div>
            <div>
                <input type="password"
                    name="password1" placeholder="Password" required />
            </div>
            <div>
                <input type="password" name="password2" placeholder="Confirm password" required />
                {renderErrorMessage("password2")}
            </div>
            <button id='btnDangnhap' class="submit" type="submit">
                Đăng ký
            </button>
            <a href="./Register-1">
                <div class="goto">Đổi số điện thoại khác</div>
            </a>
        </form>
    )

    return (
        <DefaultLayout>
            <div className={cx('authorization-wrapper')}>
                <div className={cx('form')}>
                    <div className={cx('box')}>
                        {isSubmitted ?
                            <a class="goto" href="./">
                                Successful. Go to homepage</a>
                            : renderForm}

                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Register2;