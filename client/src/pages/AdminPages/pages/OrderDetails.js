import classNames from 'classnames/bind';
import { Button, Modal, Table } from 'react-bootstrap';
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
import { Link, useSearchParams } from 'react-router-dom';
import { getAddress_str, getPaymentMethod } from '~/helpper/helpper';
const cx = classNames.bind(styles);

const CONFIRM_ORDER = 'confirm_order';
const CALCEL_ORDER = 'cancel_order';
const UPDATE_TO_INSTRAN = 'update_to_intrans';
const UPDATE_TO_SUCCESS = 'update_to_success';
const HIDDEN = 'hidden';

function OrderDetail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [order, setOrder] = useState(null);
    const [showModal, setShowModal] = useState({ type: HIDDEN, payload: '' }); //

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
        if (order.status === 'confirmed') {
            handleOpen(UPDATE_TO_INSTRAN, { id, cur_status });
        } else if (order.status === 'intrans') {
            handleOpen(UPDATE_TO_SUCCESS, { id, cur_status });
        }
    };

    const handleUpdateToSuccess = async (payload) => {
        console.log(payload)
        await updateOrderStatus(payload.id, payload.cur_status, order.deliveryCode).then((res) => getOrderById(id).then((data) => setOrder(data)));
        handleClose() ;
    }

    const handleUpdateStatusToIntrans =async  (e, payload) => {
        e.preventDefault() ; 
        let d_code = e.target.deliveryCode.value ;
        console.log(e, d_code)
        await updateOrderStatus(payload.id, payload.cur_status, d_code).then((res) => getOrderById(id).then((data) => setOrder(data)));
        handleClose() ;
    }

    const handleOpen = (type, payload) => {
        setShowModal({ type, payload });
    };
    const handleClose = () => setShowModal((prev) => ({ ...prev, type: HIDDEN }));

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
                                    <a href="#">{order.fullname}</a>
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

                        <div className={cx('books-info') + ' px-3'}>
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
                                            <td>{item.title}</td>
                                            <td className="text-center">
                                                <Price normal>{item.totalMoney}</Price>
                                            </td>
                                            <td className="text-center">{item.quantity}</td>
                                            <td className="text-center">
                                                <Price normal>{item.price * item.quantity}</Price>
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
                                <Price className="">0</Price>
                            </div>
                            <div className={cx('payment-info-item')}>
                                <span>Tổng số tiền cần thanh toán: </span>
                                <Price large className="">
                                    {order.totalMoney}
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
                                <Button
                                    type="lg"
                                    variant="primary"
                                    onClick={() => handleOpen(CONFIRM_ORDER, order.orderID)}
                                >
                                    Xác nhận
                                </Button>
                                <Button
                                    type="lg"
                                    variant="danger"
                                    onClick={() => handleOpen(CALCEL_ORDER, order.orderID)}
                                >
                                    Từ chối
                                </Button>
                            </>
                        )) ||
                            ((order.status === 'success' || order.status === 'cancel') && (
                                <React.Fragment>
                                    <Link to="/manage-order" className="btn btn-secondary">
                                        Danh sách đơn hàng
                                    </Link>
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

            {/* Comfirm order */}
            <Modal show={showModal.type === CONFIRM_ORDER} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Xác nhận đơn hàng</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <p> Xác nhận đơn hàng này là hợp lệ, sau khi xác nhận thao tác không thể phục hồi.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleConfirmOrder(showModal.payload);
                            handleClose();
                        }}
                    >
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Cancel order */}
            <Modal show={showModal.type === CALCEL_ORDER} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Xác nhận huỷ đơn hàng</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <p> Bạn chắc chắn muốn huỷ đơn hành này chứ ?</p>
                        <p> Sau khi thực hiện, thao tác không thể phục hồi</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            handleCancelOrder(showModal.payload);
                            handleClose();
                        }}
                    >
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Update to instran */}
            <Modal show={showModal.type === UPDATE_TO_INSTRAN} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Nhập mã vận đơn cho đơn hàng #{showModal.payload.id}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="p-3" name= 'updateToIntrans' id= 'updateToIntrans' onSubmit={(e) => {
                            handleUpdateStatusToIntrans(e, showModal.payload);
                    }}>
                        <div className="form-floating my-2 w-100 ml-2">
                            <input
                                type="text"
                                className="form-control"
                                name="deliveryCode"
                                placeholder="Nhập mã vận đơn"
                            />
                            <label htmlFor="address_phoneNumber">Mã vận đơn</label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type='button' className="border font-weight-normal px-5" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button
                        variant="info"
                        type='submit'
                        form ='updateToIntrans'
                    >
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Update to success */}
            <Modal show={showModal.type === UPDATE_TO_SUCCESS} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Xác nhận đã giao hàng thành công</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <p> Bạn chắc chắn muốn xác nhận đơn hàng <span className='text-primary'>#{showModal.payload.id}</span> này chứ ?</p>
                        <p> Sau khi thực hiện, thao tác không thể phục hồi</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleUpdateToSuccess(showModal.payload);
                        }}
                    >
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </DefaultLayout>
    );
}

export default OrderDetail;
