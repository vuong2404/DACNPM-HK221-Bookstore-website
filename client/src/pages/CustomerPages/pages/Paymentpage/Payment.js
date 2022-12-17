import DefaultLayout from '../../DefaultLayout';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { Button, Modal, Table } from 'react-bootstrap';

import MyButton from '~/components/Button';
import Price from '~/components/PriceDisplay/Price';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../stores';
import { PaymentModal } from '../../component/Modal';
import axios from 'axios';
import { getAddress_str, getPaymentMethod } from '~/helpper/helpper';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateAddress from '../../component/Modal/AddressModal/CreateAddr';
import images from '~/assets/images';
import { GrReturn } from 'react-icons/gr';
import { createOrder } from '~/api/orderApi';
import { removeCartItemAPI } from '~/api/CartAPI';
const cx = classNames.bind(styles);

const SELECT_ADDRESS = 'select';
const CREATE_ADDRESS = 'create';
const UPDATE_ADDRESS = 'update';
const SELECT_PAYMENT_METHOD = 'select_paymentmethod';
const PAYMENT_ONLINE_CONFIRM = 'payment_online_confirm';
const PAYMENT_ONLINE = 'payment_online';
const RESULT = 'result';
const HIDDEN = 'hidden';

const paymentMethods = [
    {
        title: 'Thanh toán khi nhận hàng',
        name: 'cash',
        image: images.shipCode,
    },
    {
        title: 'Thanh toán bằng  ví điện tử Momo',
        name: 'momo',
        image: images.momo,
    },
    {
        title: 'Thanh toán bằng  ví điện tử ZaloPay',
        name: 'zalopay',
        image: images.zalopay,
    },
    {
        title: 'Thanh toán bằng  VNPAY (Quét mã QR từ ứng dụng ngân hàng)',
        name: 'vnpay',
        image: images.vnpay,
    },
];

function Payment() {
    const [state, dispatch] = useContext(Context);
    const [showModal, setShowModal] = useState({ type: HIDDEN, payload: '' }); //
    const [currentAddress, setCurrentAddress] = useState([]);
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState('cash');
    const [addresses, setAddresses] = useState([]);

    const products = state.cart.books.filter((item) => item.isSelected);
    console.log(state.cart);
    const handleOpen = (type, payload) => {
        setShowModal({ type, payload });
    };
    const handleClose = () => setShowModal((prev) => ({ ...prev, type: HIDDEN }));

    const getAddresses = async () => {
        let user_id = JSON.parse(sessionStorage.getItem('user')).id;
        return await axios.get(`http://localhost:8080/api/address/${user_id}`).then((res) => res.data);
    };

    useEffect(() => {
        getAddresses().then((res) => setAddresses(res));
    }, []);

    useEffect(() => {
        setCurrentAddress(addresses.find((item) => item.type === '1'));
    }, [addresses]);

    console.log(addresses);

    if (products.length === 0) {
        window.location.href = '/cart';
    }

    const totalPrice = products.reduce((res, item) => (item.isSelected ? res + item.price * item.quantity : res), 0);
    console.log(products);

    const handleCreateAddress = async (data) => {
        data.type = data.type ? '1' : '0';
        data.userID = JSON.parse(sessionStorage.getItem('user')).id;

        console.log(data);
        //check current user
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/api/address',
            data: data,
        })
            .then((res) => console.log(res))
            .catch((err) => alert('Đã xảy ra lỗi!', err));

        await getAddresses().then((res) => setAddresses(res));
        handleClose();
    };

    const handleSelectAddress = (e) => {
        e.preventDefault();
        let id = Number(e.target.ChooseAddress.value);
        let cur_address = addresses.find((item) => item.id === id);
        console.log(cur_address);
        setCurrentAddress(cur_address);
        handleClose();
    };

    const handleSelectPaymentMethod = (e) => {
        e.preventDefault();
        let p_method = e.target.paymentMethod.value;
        setCurrentPaymentMethod(p_method);
        handleClose();
    };

    const handleCreateOrder = async () => {
        let id = JSON.parse(sessionStorage.getItem('user')).id;
        let order = {};
        order.userID = id;

        if (!currentAddress) {
            alert('Bạn chưa chọn địa chỉ!');
            return;
        } else order.addressId = currentAddress.id;

        if (!currentPaymentMethod) {
            alert('Bạn chưa chọn phương thức thanh toán!');
            return;
        } else order.paymentMethod = currentPaymentMethod;

        order.books = products.map((item) => [item.bookId, item.quantity]);

        console.log(order);

        if (order.paymentMethod === 'cash') {
            await createOrder(order).then((res) => handleOpen(RESULT));
        } else {
            handleOpen(PAYMENT_ONLINE, order);
        }

        //Xoá sản phẩm đã chọn trong giỏ hàng
        await order.books.forEach(async (item) => {
            await removeCartItemAPI(item[0]).then(res => res)
        });

        return;
    };
    const handleConfirmPaid = async (order) => {
        await createOrder(order).then((res) => handleOpen(RESULT));
    };

    return (
        <DefaultLayout>
            <div className={cx('heading')}>
                <h3>Thanh toán</h3>
            </div>

            <div className={cx('wrapper')}>
                <div className={cx('addr-info')}>
                    <h5>Địa chỉ nhận hàng</h5>
                    {currentAddress ? (
                        <div className={(cx('details'), 'd-flex align-items-center my-3 border-bottom py-2')}>
                            <div className="mr-5">
                                <p>
                                    Người nhận: <b>{currentAddress.receiverName}</b>
                                </p>
                                <p>
                                    Số điện thoại: <b>{currentAddress.phoneNumber}</b>
                                </p>
                            </div>

                            <span className="mx-4 font-weight-normal">{getAddress_str(currentAddress)}</span>

                            <div className={(cx('action'), 'ml-auto')}>
                                <MyButton outline disabled className="text-danger opacity-100 font-weight-normal">
                                    Mặc định
                                </MyButton>
                                {/* <AddressModal addresses={addresses} /> */}
                                <MyButton className="text-primary" onClick={() => handleOpen(SELECT_ADDRESS, '')}>
                                    Thay đổi
                                </MyButton>
                            </div>
                        </div>
                    ) : (
                        <button className="btn btn-outline-primary mb-3" onClick={() => handleOpen(SELECT_ADDRESS, '')}>
                            + Địa chỉ mới
                        </button>
                    )}
                </div>
                <div className={cx('products-info', 'border-bottom py-2')}>
                    <h5>Chi tiết sản phẩm</h5>
                    <Table borderless>
                        <thead className="border-bottom">
                            <tr className="">
                                <th className="py-3 pl-0 font-weight-normal">Tên sách</th>
                                <th className="text-center py-3 font-weight-normal">Đơn giá</th>
                                <th className="text-center py-3 font-weight-normal">Số lượng</th>
                                <th className="text-center py-3 font-weight-normal">Thành tiền</th>
                            </tr>
                        </thead>
                        {products.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td className="align-baseline p-0 py-3">
                                        <img src={item.urlBook} alt="" width={50} className="mr-2" />
                                        <span>{item.title}</span>
                                    </td>
                                    <td className="align-baseline text-center py-3">
                                        <Price primary>{item.price}</Price>
                                    </td>
                                    <td className="align-baseline text-center py-3">{item.quantity}</td>
                                    <td className="align-baseline text-center py-3">
                                        <Price primary>{item.price * item.quantity}</Price>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
                <div className={(cx('payemnt-info'), 'd-flex align-items-center my-2 border-bottom py-2')}>
                    <h5>Phương thức thanh toán</h5>
                    <span className="ml-auto font-weight-normal">{getPaymentMethod(currentPaymentMethod)}</span>
                    <MyButton className="text-primary" onClick={() => handleOpen(SELECT_PAYMENT_METHOD, '')}>
                        Thay đổi
                    </MyButton>
                </div>
                <div className={(cx('cost-info'), 'my-3 border-bottom py-2')}>
                    <div className="d-flex justify-content-end mb-2 py-2">
                        <span className="mr-4 font-weight-normal">Tổng tiền hàng:</span>
                        <Price normal className="font-weight-normal">
                            {totalPrice}
                        </Price>
                    </div>
                    <div className="d-flex justify-content-end mb-2 py-2">
                        <span className="mr-4 font-weight-normal">Phí vận chuyển</span>
                        <Price normal className="font-weight-normal">
                            30000
                        </Price>
                    </div>
                    <div className="d-flex justify-content-end mb-2 py-2">
                        <span className="mr-4 font-weight-normal">Tổng thanh toán:</span>
                        <Price primary large className="font-weight-bold">
                            {totalPrice + 30000}
                        </Price>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <MyButton primary user large className="ml-auto my-3 py-2" onClick={handleCreateOrder}>
                        Đặt hàng
                    </MyButton>
                </div>
            </div>

            {/* select address */}
            <Modal
                contentClassName="modal-height"
                dialogClassName="modal-width"
                show={showModal.type === SELECT_ADDRESS}
                onHide={handleClose}
                size="lg"
                backdrop="static"
                // style={{ overflowY: 'scroll' }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>Địa chỉ nhận hàng</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form name="selectAddressForm" id="selectAddressForm" onSubmit={(e) => handleSelectAddress(e)}>
                        {currentAddress &&
                            addresses.length > 0 &&
                            addresses.map((item, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-start mx-4 py-4 border-bottom">
                                        <input
                                            type={'radio'}
                                            defaultChecked={item.id === currentAddress.id}
                                            name="ChooseAddress"
                                            value={item.id}
                                        />
                                        <div className="mx-3">
                                            <p className="font-weight-bold">{item.receiverName}</p>
                                            <p>{item.phoneNumber}</p>
                                            <p>{getAddress_str(item)}</p>
                                            {item.type === '1' && (
                                                <MyButton
                                                    outline
                                                    disabled
                                                    className="text-danger opacity-100 font-weight-normal"
                                                >
                                                    Mặc định
                                                </MyButton>
                                            )}
                                        </div>
                                        <MyButton text className="text-primary ml-auto">
                                            Cập nhật
                                        </MyButton>
                                    </div>
                                );
                            })}
                        <MyButton
                            outline
                            large
                            type="button"
                            className="border my-4 font-weight-normal px-5"
                            leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            onClick={() => {
                                handleOpen(CREATE_ADDRESS, '');
                            }}
                        >
                            Địa chỉ mới
                        </MyButton>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <MyButton outline className="border font-weight-normal px-5" onClick={handleClose}>
                        Huỷ
                    </MyButton>
                    <Button variant="danger" type="submit" form="selectAddressForm">
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* create address */}
            <CreateAddress
                close={() => handleOpen(SELECT_ADDRESS)}
                show={showModal.type === CREATE_ADDRESS}
                callback={(data) => handleCreateAddress(data)}
            />

            {/* select payemtn method */}
            <Modal
                show={showModal.type === SELECT_PAYMENT_METHOD}
                onHide={handleClose}
                size="lg"
                contentClassName="modal-height"
                dialogClassName="modal-width"
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Chọn phương thức thanh toán</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-3">
                    <form
                        name="selectPaymentMethod"
                        id="selectPaymentMethod"
                        onSubmit={(e) => handleSelectPaymentMethod(e)}
                    >
                        {paymentMethods.map((item, index) => (
                            <label key={index} className="d-flex align-items-center my-3">
                                <input type={'radio'} name="paymentMethod" id={item.name} value={item.name} />
                                <img src={item.image} alt="" width="40px" className="rounded-circle mx-3" />
                                {item.title}
                            </label>
                        ))}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <MyButton outline type="button" className="border font-weight-normal px-5" onClick={handleClose}>
                        Trở về
                    </MyButton>
                    <MyButton primary user type="submit" form="selectPaymentMethod">
                        Xác nhận
                    </MyButton>
                </Modal.Footer>
            </Modal>

            {/* Payment online */}
            <Modal show={showModal.type === PAYMENT_ONLINE} onHide={handleClose} size="lg" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>{showModal.payload && getPaymentMethod(showModal.payload.paymentMethod)}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-5">
                                <img src={require('~/assets/images/qrcode.png')} alt="" width={'100%'} />
                            </div>
                            <div className="col-12 col-sm-7">
                                <h6>QUÉT MÃ QR ĐỂ THANH TOÁN</h6>
                                <div className="d-flex align-items-start">
                                    <span className="bg-primary rounded-circle px-2 py-1 text-white ms-0 me-1">1</span>
                                    <span> Mở ứng dụng VNPAY trên điện thoại</span>
                                </div>
                                <div className="d-flex align-items-start my-2">
                                    <span className="bg-primary rounded-circle px-2 py-1 text-white ms-0 me-1">2</span>
                                    <span>Trên trang chủ chọn “ Quét mã QR” </span>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="bg-primary rounded-circle px-2 py-1 text-white ms-0 me-1">3</span>
                                    <span>Quét mã QR này để thanh toán </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-info d-block mt-3 font-weight-regular"
                                    onClick={handleClose}
                                >
                                    Chọn phương thức khác
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            handleClose();
                            handleOpen(PAYMENT_ONLINE_CONFIRM, showModal.payload);
                        }}
                    >
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* confirm paid */}
            <Modal show={showModal.type === PAYMENT_ONLINE_CONFIRM} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Xác nhận thanh toán</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>
                            {' '}
                            Xác nhận bạn đã thanh toán cho đơn hàng này, sau khi xác nhận chúng tôi sẽ phản hồi cho bạn
                            trong thời gian sớm nhất có thể
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="border font-weight-normal px-5" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button variant="danger" onClick={() => handleConfirmPaid(showModal.payload)}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* KẾt quả */}
            <Modal show={showModal.type === RESULT} onHide={handleClose} size="" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Đặt hàng thành công</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>
                            Cảm ơn bạn đã tin tưởng và ủng hộ IceTea! Vui lòng theo dõi điện thoại, chúng tôi sẽ liên hệ
                            với bạn trong thời gian sớm nhất.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleClose();

                            //chuyển sang trang chủ
                            window.location.href = '/';
                        }}
                    >
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </DefaultLayout>
    );
}

export default Payment;
