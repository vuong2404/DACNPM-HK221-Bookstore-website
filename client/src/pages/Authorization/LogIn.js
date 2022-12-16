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
// import MyButton from '../../components/MyButton';

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
            id: "1000000",
            username: "username1",
            password: "password1@",
            fullname: "Nguyễn Văn Anh",
            email: "nguyenvananh@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",

        },
        {
            id: "1000001",
            username: "username2",
            password: "password2@",
            fullname: "Nguyễn Huy Quốc",
            email: "nguyenhuyquoc@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000002",
            username: "username3",
            password: "password3@",
            fullname: "Hà Huy Nam",
            email: "hahuynam@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000003",
            username: "username4",
            password: "password4@",
            fullname: "Nguyễn Văn Anh",
            email: "nguyenvananh@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000004",
            username: "username5",
            password: "password5@",
            fullname: "Châu Ngọc Anh",
            email: "chaungocanh@gmail.com",
            phoneNum: "0923236277",
            gender: "Nữ",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000005",
            username: "username6",
            password: "password6@",
            fullname: "Phan Hà Anh",
            email: "phanhaanh@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000006",
            username: "username7",
            password: "password7@",
            fullname: "Nguyễn Hà Phương",
            email: "nguyenhaphuong@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000007",
            username: "username8",
            password: "password8@",
            fullname: "Nguyễn Đình Phúc",
            email: "nguyendinhphuc@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000008",
            username: "username9",
            password: "password9@",
            fullname: "Nguyễn Hà Giang",
            email: "nguyenhagiang@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
        },
        {
            id: "1000009",
            username: "username10",
            password: "password10@",
            fullname: "Dương Đình Bảo",
            email: "duongdinhbao@gmail.com",
            phoneNum: "0923236277",
            gender: "Nam",
            birthDate: "20020217",
            registerDate: "20221205",
            address: "Phường Linh Trung, Thủ Đức, TPHCM",
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


    // var linkto = '/';
    // const navigate = useNavigate();
    // const [input, setinput] = useState({ username: '', password: '', email: '' });
    // const [danger, setdanger] = useState({ username: false, password: false, email: false, login: false });
    // const [forget, setforget] = useState(false);
    // function LoginDB() {
    //     axios({
    //         method: 'put',
    //         url: 'http://localhost:8080/api/users/login',
    //         data: {
    //             username: input.username,
    //             password: input.password,
    //         },
    //     })
    //         .then((res) => (sessionStorage.setItem("user", JSON.stringify({ id: res.data.data.id, address: res.data.data.address, email: res.data.data.email, phone: res.data.data.phone, name: res.data.data.first_name + ' ' + res.data.data.last_name, token: res.data.data.token, type: res.data.data.type }))))
    //         .then(() => navigate('/'))
    //         .catch((res) => { alert('Incorrect Username or Password') });
    // }
    // function handleChange(e) {
    //     setinput({ ...input, [e.target.name]: e.target.value });
    // }
    // function validatepassword() {
    //     if (input.username === '') {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    // function validateusername() {
    //     if (input.username === '') {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    // function handleSubmitLogin(e) {
    //     e.preventDefault();
    //     if (validateusername()) {
    //         if (validatepassword()) {
    //             LoginDB(input);
    //         }
    //     }
    // }
    // function validateemail() {
    //     if (input.email === '') return false;
    //     else return true;
    // }
    // const handleSubmitForget = (e) => {
    //     e.preventDefault();
    //     if (validateemail()) {
    //         setforget(true);
    //     } else setdanger({ password: false, username: false, login: false, email: true });
    // };

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

        // <Container>
        //     <Row>
        //         <Col md={8} lg={6} xs={12}>
        //             <Row>
        //                 <h2 className="fw-bold mb-2 text-uppercase ">Đăng nhập tài khoản</h2>
        //             </Row>
        //             <Row className="mb-3 mt-md-4 ">
        //                 <Form onSubmit={(e) => handleSubmitLogin(e)}>
        //                     <Form.Group className="mb-3 w-75">
        //                         <Form.Label className="text-center">Tên tài khoản</Form.Label>
        //                         <Form.Control
        //                             type="text"
        //                             placeholder="Enter username"
        //                             name="username"
        //                             value={input.username}
        //                             onChange={(e) => handleChange(e)}
        //                         />
        //                         <p className={` ${danger.username ? 'text-danger' : 'visually-hidden'}`}>
        //                             Please enter a valid username
        //                         </p>
        //                     </Form.Group>

        //                     <Form.Group className="mb-3 w-75">
        //                         <Form.Label className="text-center">Mật khẩu</Form.Label>
        //                         <Form.Control
        //                             type="password"
        //                             placeholder="Enter password"
        //                             name="password"
        //                             value={input.password}
        //                             onChange={(e) => handleChange(e)}
        //                         />
        //                         <p className={` ${danger.password ? 'text-danger' : 'visually-hidden'}`}>
        //                             Please enter a valid password
        //                         </p>
        //                     </Form.Group>
        //                     <div>
        //                         <button primary className="w-75" type="submit">
        //                             Đăng nhập
        //                         </button>
        //                         <p className={` ${danger.login ? 'text-danger' : 'visually-hidden'}`}>Wrong login detail</p>
        //                         <button className="w-75 mt-2" to="/signup">
        //                             Chưa có tài khoản? Đăng kí
        //                         </button>
        //                     </div>
        //                 </Form>
        //             </Row>
        //         </Col>
        //         <Col>
        //             <Row>
        //                 <p className="mb-2">Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</p>
        //             </Row>
        //             <Row className="mb-3 mt-md-4 ">
        //                 {forget && <Navigate to="/" replace={true} />}
        //                 <Form onSubmit={(e) => handleSubmitForget(e)}>
        //                     <Form.Group className="mb-3 w-75">
        //                         <Form.Label className="text-center">Email</Form.Label>
        //                         <Form.Control
        //                             type="email"
        //                             placeholder="Enter email"
        //                             name="email"
        //                             value={input.email}
        //                             onChange={handleChange}
        //                         />
        //                         <p className={` ${danger.email ? 'text-danger' : 'visually-hidden'}`}>Please enter a valid email</p>
        //                     </Form.Group>

        //                     <button primary className="w-75" type="submit">
        //                         Lấy lại mật khẩu
        //                     </button>
        //                 </Form>
        //             </Row>
        //         </Col>
        //     </Row>
        // </Container>

    )
}

export default LogIn;