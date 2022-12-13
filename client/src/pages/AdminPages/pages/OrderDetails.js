import classNames from 'classnames/bind';
import { Alert, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './AdminPage.module.scss';
import DefaultLayout from '../DefaultLayout';
import MyButton from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Status from '~/components/OrderStatus/OrderStatus';
import Price from '~/components/PriceDisplay/Price';
import React, { useEffect, useState } from 'react';
import { cancelOrder, confirmOrder, getOrderById, updateOrderStatus } from '~/api/orderApi';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { getAddress_str, getPaymentMethod } from '~/helpper/helpper';
const cx = classNames.bind(styles);

function OrderDetail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [order, setOrder] = useState(null);
    let id = searchParams.get('id');

    useEffect(() => {
        getOrderById(id).then((data) => setOrder(data));
    }, []);
    const handleConfirmOrder = async (id) => {
        confirmOrder(id).then((res) => getOrderById(id).then((data) => setOrder(data)));
    };

    const handleCancelOrder = async (id) => {
        cancelOrder(id).then((res) => getOrderById(id).then((data) => setOrder(data)));
    };

    const handleUpdateOrderStatus = async (id, cur_status) => {
        
        updateOrderStatus(id, cur_status).then((res) => getOrderById(id).then((data) => setOrder(data)));
    };
    return (
        <DefaultLayout>
            {order && (
                <div>
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
                                <b>ID: #{order.orderID}</b>
                            </span>
                            <Status type={order.status} />
                            {order.deliveryCode && <Status type={order.status}>{order.deliveryCode}</Status>}
                        </div>

                        <div className={cx('order-info')}>
                            <div className={cx('user-name')}>
                                <span> Khách hàng: </span>
                                <b>
                                    <a href="#">#{order.userID}</a>
                                </b>
                            </div>
                            <span>
                                Ngày đặt hàng: <b>{order.createAt}</b>
                            </span>
                        </div>

                        <div className={cx('address-info')}>
                            <h4>Thông tin nhận hàng</h4>
                            <p>
                                Họ tên: <b>{order.receiveInfo.receiverName}</b>
                            </p>
                            <p>
                                Số điện thoại: <b>{order.receiveInfo.phoneNumber}</b>
                            </p>
                            <p>
                                Địa chỉ: <b>{getAddress_str(order.receiveInfo)}</b>
                            </p>
                        </div>

                        <div className={cx('books-info')}>
                            <h4>Bảng giá</h4>
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
                                {order.books.map((item, index) => (
                                    <tbody key={index}>
                                        <tr>
                                            <td>{item.bookID}</td>
                                            <td>{item.bookID}</td>
                                            <td className="text-center">
                                                <Price normal>{item.totalMoney}</Price>
                                            </td>
                                            <td className="text-center">{item.totalMoney}</td>
                                            <td className="text-center">
                                                <Price normal>{item.totalMoney * item.quantity}</Price>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </Table>
                        </div>

                        <div className={cx('payment-info')}>
                            <div className={cx('payment-info-item')}>
                                <span>Tổng đơn: </span>
                                <Price className="">{order.totalMoney}</Price>
                            </div>
                            <div className={cx('payment-info-item')}>
                                <span>Phí ship: </span>
                                <Price className="">30000</Price>
                            </div>
                            <div className={cx('payment-info-item')}>
                                <span>Tổng số tiền cần thanh toán: </span>
                                <Price large className="">
                                    {order.totalMoney + 30000}
                                </Price>
                            </div>

                            <div className={cx('payment-info-item')}>
                                <span>Phương thức thanh toán: </span>
                                <span>
                                    <b>{getPaymentMethod(order.paymentMethod)}</b>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('order-details--actions')}>
                        {(order.status === 'waiting' && (
                            <>
                                <Button type="lg" variant="primary" onClick={() => handleConfirmOrder(order.orderID)}>
                                    Xác nhận
                                </Button>
                                <Button type="lg" variant="danger" onClick={() => handleCancelOrder(order.orderID)}>
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
                            ((order.status === 'confirmed' ||
                                order.status === 'intrans' ||
                                order.status === 'undelivered') && (
                                <React.Fragment>
                                    <Button
                                        size="lg"
                                        variant="warning"
                                        onClick={() => handleUpdateOrderStatus(order.orderID, order.status)}
                                    >
                                        Cập nhật trạng thái
                                    </Button>
                                </React.Fragment>
                            ))}
                    </div>
                </div>
            )}
        </DefaultLayout>
    );
}

export default OrderDetail;
