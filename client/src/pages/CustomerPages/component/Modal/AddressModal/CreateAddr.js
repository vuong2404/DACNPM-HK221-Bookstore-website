import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';

import './AddressModal.scss';

import MyButton from '~/components/Button';
import { Context } from '../../../stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddrModalContext } from './AddressModal';

function CreateAddress() {
    const [state, dispatch] = useContext(Context);
    const addresses = state.addresses;

    const value = useContext(AddrModalContext);
    const { show, setShow, handleClose, modalShow, setModalShow, handleShow } = value;
    console.log('create modal');

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>Địa chỉ mới</h1>
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

export default CreateAddress;
