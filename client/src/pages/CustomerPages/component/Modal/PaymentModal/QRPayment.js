import { useContext } from 'react';
import { Modal } from 'react-bootstrap';

import MyButton from '~/components/Button';
import { PaymentModalContext } from './PaymentModal';

function QRPayment() {
    const value = useContext(PaymentModalContext);
    const { show, handleClose, setModalShow } = value;
    console.log('create modal');

    return (
        <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4>Thanh toán bằng QR</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
                <MyButton outline className="border font-weight-normal px-5" onClick={() => setModalShow(1)}>
                    Trở về
                </MyButton>
                <MyButton primary user onClick={handleClose}>
                    Xác nhận
                </MyButton>
            </Modal.Footer>
        </Modal>
    );
}

export default QRPayment;
