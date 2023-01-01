import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faImage } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import DefaultLayout from '~/layout/AdminLayout';
import classNames from 'classnames/bind';
import styles from '../AdminPage.module.scss';
import MyButton from '~/components/Button';
import {  useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { Form } from 'react-bootstrap';
import customer from '../customerInfo';

const cx = classNames.bind(styles);

function ManageCustomerAdd() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let newName = name;
        let newEmail = email;
        let newPhone = phone;
        let newAddress = address;
        let newDate = date;
        customer.push({ id: uniqueId, name: newName, email: newEmail, phone: newPhone, address: newAddress, date: "2022-12-17" })
        
        history('/member')
    }

    return (
        <DefaultLayout>
            <div className={cx('member-wrapper')}>
                <h2>Thêm khách hàng mới</h2>
                <br />
                <Form style={{ margin: "2rem 15rem 2rem 15rem" }}>
                    <Form.Group className={cx('mb-3')} controlId="formName">
                        {/* <label>Họ và tên:  </label> */}
                        <Form.Control type="text" placeholder='Họ và tên' required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className={cx('mb-3')} controlId="formEmail">
                        {/* <label>Email: </label> */}
                        <Form.Control type="text" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className={cx('mb-3')} controlIde="formPhone">
                        {/* <label>Số điện thoại: </label> */}
                        <Form.Control type="text" placeholder='Số điện thoại' required onChange={(e) => setPhone(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className={cx('mb-3')} controlId="formAddress">
                        {/* <label>Địa chỉ: </label> */}
                        <Form.Control type="text" placeholder='Địa chỉ' required onChange={(e) => setAddress(e.target.value)}>
                            {/* <textarea type="text" className="form-control" rows="3" /> */}
                        </Form.Control>
                    </Form.Group>
                    <div className={cx('button-field')}>
                        <MyButton className="btn btn-primary btn-lg" style={{ background: '#0c3b7c' }} to="/member"> Huỷ </MyButton>
                        <MyButton type="submit" className="btn btn-primary btn-lg" onClick={(e) => handleSubmit(e)}> Thêm </MyButton>
                    </div>
                </Form>
            </div >
        </DefaultLayout >
    )
}

export default ManageCustomerAdd;
