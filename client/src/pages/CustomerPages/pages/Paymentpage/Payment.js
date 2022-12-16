import DefaultLayout from '../../DefaultLayout';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { Button, Modal, Table } from 'react-bootstrap';

import MyButton from '~/components/Button';
import Price from '~/components/PriceDisplay/Price';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../stores';
import { AddressModal, PaymentModal } from '../../component/Modal';
import axios from 'axios';
import { getAddress_str } from '~/helpper/helpper';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateAddress from '../../component/Modal/AddressModal/CreateAddr';
import { Form } from 'react-router-dom';

const cx = classNames.bind(styles);

const SELECT_ADDRESS = 'select';
const CREATE_ADDRESS = 'create';
const UPDATE_ADDRESS = 'update';
const HIDDEN = 'hidden';

function Payment() {
    const [state, dispatch] = useContext(Context);
    const products = state.listBooks.filter((item) => item.isSelected);
    const [showModal, setShowModal] = useState({ type: HIDDEN, payload: '' }); //
    const [currentAddress, setCurrentAddress] = useState([]);
    const [addresses, setAddresses] = useState([]);

    const handleOpen = (type, payload) => {
        setShowModal({ type, payload });
    };
    const handleClose = () => setShowModal((prev) => ({ ...prev, type: HIDDEN }));

    const getAddresses = async () => {
        return await axios.get(`http://localhost:8080/api/address/${state.user.id}`).then((res) => res.data);
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

    const totalPrice = products.reduce(
        (res, item) => (item.isSelected ? res + item.product.price * item.count : res),
        0,
    );
    console.log(products);

    const handleCreateAddress = async (data) => {
        data.type = data.type ? '1' : '0';
        data.userID = state.user.id;

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
        let id = Number(e.target.ChooseAddress.value)
        let cur_address = addresses.find((item => item.id === id)) ;
        console.log(cur_address)
        setCurrentAddress(cur_address) ;
        handleClose() ;
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
                                        <img src={item.product.image} alt="" width={50} className="mr-2" />
                                        <span>{item.product.title}</span>
                                    </td>
                                    <td className="align-baseline text-center py-3">
                                        <Price primary>{item.product.price}</Price>
                                    </td>
                                    <td className="align-baseline text-center py-3">{item.count}</td>
                                    <td className="align-baseline text-center py-3">
                                        <Price primary>{item.product.price * item.count}</Price>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
                <div className={(cx('payemnt-info'), 'd-flex align-items-center my-2 border-bottom py-2')}>
                    <h5>Phương thức thanh toán</h5>
                    <span className="ml-auto font-weight-normal">Thanh toán khi nhận hàng</span>
                    <PaymentModal />
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
                    <MyButton primary user large className="ml-auto my-3 py-2">
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
                    <form
                        name="selectAddressForm"
                        id="selectAddressForm"
                        onSubmit={(e) => handleSelectAddress(e)}
                    >
                        {currentAddress &&
                            addresses.length > 0 &&
                            addresses.map((item, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-start mx-4 py-4 border-bottom">
                                        <input type={'radio'} defaultChecked={item.id === currentAddress.id} name="ChooseAddress" value={item.id} />
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
                            type='button'
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
                    <Button variant="danger" type="submit" form ='selectAddressForm'>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                <CreateAddress
                    close={() => handleOpen(SELECT_ADDRESS)}
                    show={showModal.type === CREATE_ADDRESS}
                    callback={(data) => handleCreateAddress(data)}
                />
            }
        </DefaultLayout>
    );
}

export default Payment;
