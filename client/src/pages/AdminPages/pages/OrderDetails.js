import classNames from 'classnames/bind';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './AdminPage.module.scss';
import DefaultLayout from '../DefaultLayout';
import MyButton from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Status from '~/components/OrderStatus/OrderStatus';
import Price from '~/components/PriceDisplay/Price';
import React from 'react';
const cx = classNames.bind(styles);

const order = {
    id: 'abc123',
    userID: '1234',
    username: 'Nguyen van A',
    status: 'confirmed',
    code: 'CMDJE42J238',
    time: '12 Oct 2022 12:34:32 GMT+0700',
    addrInfo: {
        name: 'Nguyen Van A',
        phoneNumber: '01345875773',
        addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
    },
};

const products = [
    {
        id: 'BOOK' + Math.floor(Math.random() * 100000 + 1),
        title: "Sophie's World (Sofies verden)",
        price: 160000,
        quantity: 2,
    },
    {
        id: 'BOOK' + Math.floor(Math.random() * 100000 + 1),
        title: 'The Name of the Rose (Il Nome della Rosa)',
        price: 150000,
        quantity: 2,
    },
    {
        id: 'BOOK' + Math.floor(Math.random() * 100000 + 1),
        title: 'How the Steel Was Tempered (Как закалялась сталь))',
        price: 160000,
        quantity: 1,
    },
    {
        id: 'BOOK' + Math.floor(Math.random() * 100000 + 1),
        title: "Sophie's World (Sofies verden)",
        price: 170000,
        quantity: 1,
    },
];
function OrderDetail() {
    const totalPrice = products.reduce((res, item) => res + item.price * item.quantity, 0);

    return (
        <DefaultLayout>
            <div className={cx('order-details-wrapper')}>
                <div className={cx('header')}>
                    <MyButton
                        className={cx('back')}
                        to="/manage-order"
                        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                    >
                        Trở về
                    </MyButton>
                    <span className={cx('order-id')}>
                        <b>ID: {order.id}</b>
                    </span>
                    <Status type="success" />
                    {order.code && <Status type="success">{order.code}</Status>}
                </div>

                <div className={cx('order-info')}>
                    <div className={cx('user-name')}>
                        <span> Khách hàng: </span>
                        <b>
                            <a href="#">{order.username}</a>
                        </b>
                    </div>
                    <span>
                        Ngày đặt hàng: <b>12/4/2022 12:22:23</b>
                    </span>
                </div>

                <div className={cx('address-info')}>
                    <h2>Địa chỉ nhận hàng</h2>
                    <p>
                        Họ tên: <b>{order.addrInfo.name}</b>
                    </p>
                    <p>
                        Số điện thoại: <b>{order.addrInfo.phoneNumber}</b>
                    </p>
                    <p>
                        Địa chỉ: <b>{order.addrInfo.addr}</b>
                    </p>
                </div>

                <div className={cx('products-info')}>
                    <h2>Bảng giá</h2>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên sách</th>
                                <th className="text-center">Đơn giá</th>
                                <th className="text-center">Số lượng</th>
                                <th className="text-center">Thành tiền</th>
                            </tr>
                        </thead>
                        {products.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td className="text-center">
                                        <Price>{item.price}</Price>
                                    </td>
                                    <td className="text-center">{item.quantity}</td>
                                    <td className="text-center">
                                        <Price>{item.price * item.quantity}</Price>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>

                <div className={cx('payment-info')}>
                    <div className={cx('payment-info-item')}>
                        <span>Tổng đơn: </span>
                        <Price className="">{totalPrice}</Price>
                    </div>
                    <div className={cx('payment-info-item')}>
                        <span>Phí ship: </span>
                        <Price className="">30000</Price>
                    </div>
                    <div className={cx('payment-info-item')}>
                        <span>Tổng số tiền cần thanh toán: </span>
                        <Price large className="">
                            {totalPrice + 30000}
                        </Price>
                    </div>

                    <div className={cx('payment-info-item')}>
                        <span>Phương thức thanh toán: </span>
                        <span>
                            <b>Thanh toán khi nhận hàng</b>
                        </span>
                    </div>
                </div>
            </div>

            <div className={cx('order-details--actions')}>
                {(order.status === 'waitting' && (
                    <>
                        <Button type="lg" variant="primary">
                            Xác nhận
                        </Button>
                        <Button type="lg" variant="danger">
                            Từ chối
                        </Button>
                    </>
                )) ||
                    ((order.status === 'success' || order.status === 'cancel') && (
                        <React.Fragment>
                            <Button type="lg" variant="secondary">
                                Danh sách đơn hàng
                            </Button>
                        </React.Fragment>
                    )) ||
                    ((order.status === 'confirmed' || order.status === 'intrans' || order.status === 'undelivered') && (
                        <React.Fragment>
                            <Button size="lg" variant="warning">
                                Cập nhật trạng thái
                            </Button>
                        </React.Fragment>
                    ))}
            </div>
        </DefaultLayout>
    );
}

export default OrderDetail;
