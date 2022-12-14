import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Button, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './AdminPage.module.scss';
import DefaultLayout from '~/layout/AdminLayout';
import MyButton from '~/components/Button';
import Status from '~/components/OrderStatus/OrderStatus';
import Price from '~/components/PriceDisplay/Price';
import { cancelOrder, confirmOrder, getOrderById, updateOrderStatus } from '~/api/orderApi';
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
                                Tr??? v???
                            </MyButton>
                            <span className={cx('order-id')}>
                                <b>ID: #{order.orderID}</b>
                            </span>
                            <Status type={order.status} />
                            {order.deliveryCode && <Status type={order.status}>{order.deliveryCode}</Status>}
                        </div>

                        <div className={cx('order-info')}>
                            <div className={cx('user-name')}>
                                <span> Kh??ch h??ng: </span>
                                <b>
                                    <a href="#">{order.fullname}</a>
                                </b>
                            </div>
                            <span>
                                Ng??y ?????t h??ng: <b>{order.createAt}</b>
                            </span>
                        </div>

                        <div className={cx('address-info')}>
                            <h4>Th??ng tin nh???n h??ng</h4>
                            <p>
                                H??? t??n: <b>{order.receiveInfo.receiverName}</b>
                            </p>
                            <p>
                                S??? ??i???n tho???i: <b>{order.receiveInfo.phoneNumber}</b>
                            </p>
                            <p>
                                ?????a ch???: <b>{getAddress_str(order.receiveInfo)}</b>
                            </p>
                        </div>

                        <div className={cx('books-info') + ' px-3'}>
                            <h4>B???ng gi??</h4>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>T??n s??ch</th>
                                        <th className="text-center">????n gi??</th>
                                        <th className="text-center">S??? l?????ng</th>
                                        <th className="text-center">Th??nh ti???n</th>
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
                                <span>T???ng ????n: </span>
                                <Price className="">{order.totalMoney}</Price>
                            </div>
                            <div className={cx('payment-info-item')}>
                                <span>Ph?? ship: </span>
                                <Price className="">0</Price>
                            </div>
                            <div className={cx('payment-info-item')}>
                                <span>T???ng s??? ti???n c???n thanh to??n: </span>
                                <Price large className="">
                                    {order.totalMoney}
                                </Price>
                            </div>

                            <div className={cx('payment-info-item')}>
                                <span>Ph????ng th???c thanh to??n: </span>
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
                                    X??c nh???n
                                </Button>
                                <Button
                                    type="lg"
                                    variant="danger"
                                    onClick={() => handleOpen(CALCEL_ORDER, order.orderID)}
                                >
                                    T??? ch???i
                                </Button>
                            </>
                        )) ||
                            ((order.status === 'success' || order.status === 'cancel') && (
                                <React.Fragment>
                                    <Link to="/manage-order" className="btn btn-secondary">
                                        Danh s??ch ????n h??ng
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
                                        C???p nh???t tr???ng th??i
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
                        <h5>X??c nh???n ????n h??ng</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <p> X??c nh???n ????n h??ng n??y l?? h???p l???, sau khi x??c nh???n thao t??c kh??ng th??? ph???c h???i.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Hu???
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleConfirmOrder(showModal.payload);
                            handleClose();
                        }}
                    >
                        X??c nh???n
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Cancel order */}
            <Modal show={showModal.type === CALCEL_ORDER} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>X??c nh???n hu??? ????n h??ng</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <p> B???n ch???c ch???n mu???n hu??? ????n h??nh n??y ch??? ?</p>
                        <p> Sau khi th???c hi???n, thao t??c kh??ng th??? ph???c h???i</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Hu???
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            handleCancelOrder(showModal.payload);
                            handleClose();
                        }}
                    >
                        X??c nh???n
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Update to instran */}
            <Modal show={showModal.type === UPDATE_TO_INSTRAN} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Nh???p m?? v???n ????n cho ????n h??ng #{showModal.payload.id}</h5>
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
                                placeholder="Nh???p m?? v???n ????n"
                            />
                            <label htmlFor="address_phoneNumber">M?? v???n ????n</label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type='button' className="border font-weight-normal px-5" onClick={handleClose}>
                        Hu???
                    </Button>
                    <Button
                        variant="info"
                        type='submit'
                        form ='updateToIntrans'
                    >
                        X??c nh???n
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Update to success */}
            <Modal show={showModal.type === UPDATE_TO_SUCCESS} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>X??c nh???n ???? giao h??ng th??nh c??ng</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <p> B???n ch???c ch???n mu???n x??c nh???n ????n h??ng <span className='text-primary'>#{showModal.payload.id}</span> n??y ch??? ?</p>
                        <p> Sau khi th???c hi???n, thao t??c kh??ng th??? ph???c h???i</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Hu???
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleUpdateToSuccess(showModal.payload);
                        }}
                    >
                        X??c nh???n
                    </Button>
                </Modal.Footer>
            </Modal>
        </DefaultLayout>
    );
}

export default OrderDetail;
