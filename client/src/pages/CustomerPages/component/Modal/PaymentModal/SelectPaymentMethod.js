import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';

import MyButton from '~/components/Button';
import { PaymentModalContext } from './PaymentModal';

function SelectPaymentMethod() {
    const value = useContext(PaymentModalContext);
    const { show, setShow, handleClose, modalShow, setModalShow, handleShow } = value;
    console.log('create modal');

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>Chọn phương thức thanh toán</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
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
