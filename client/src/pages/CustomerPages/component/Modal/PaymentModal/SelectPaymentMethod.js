import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import images from '~/assets/images';

import MyButton from '~/components/Button';
import { PaymentModalContext } from './PaymentModal';

const paymentMethods = [
    {
        title: 'Thanh toán khi nhận hàng',
        name: 'shipCod',
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

function SelectPaymentMethod() {
    const value = useContext(PaymentModalContext);
    const { show, setShow, handleClose, modalShow, setModalShow, handleShow } = value;

    return (
        <Modal
            show={show}
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
                {paymentMethods.map((item, index) => (
                    <label key={index} className="d-flex align-items-center my-3">
                        <input type={'radio'} name="paymentMethod" id={item.name} />
                        <img src={item.image} alt="" width="40px" className="rounded-circle mx-3" />
                        {item.title}
                    </label>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <MyButton outline className="border font-weight-normal px-5">
                    Trở về
                </MyButton>
                <MyButton primary user onClick={() => setModalShow(2)}>
                    Xác nhận
                </MyButton>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectPaymentMethod;
