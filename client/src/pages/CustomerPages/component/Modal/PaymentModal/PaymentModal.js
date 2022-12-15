import { createContext, useState } from 'react';

import MyButton from '~/components/Button';
import SelectPaymentMethod from './SelectPaymentMethod';
import QRPayment from './QRPayment';
import '../Modal.scss';

export const PaymentModalContext = createContext();

function PaymentModal() {
    const [modalShow, setModalShow] = useState(1);
    // modalShow = 1 => show Select Address Modal
    // modalShow = 2 => show Create new Address Modal

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const value = {
        show,
        setShow,
        handleClose,
        handleShow,
        modalShow,
        setModalShow,
    };

    return (
        <PaymentModalContext.Provider value={value} backdrop="static">
            <MyButton className="text-primary" onClick={handleShow}>
                Thay đổi
            </MyButton>
            {(modalShow === 1 && <SelectPaymentMethod />) || (modalShow === 2 && <QRPayment />)}
        </PaymentModalContext.Provider>
    );
}

export default PaymentModal;
