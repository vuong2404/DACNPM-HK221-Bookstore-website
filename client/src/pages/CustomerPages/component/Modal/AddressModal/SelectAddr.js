import { useContext } from 'react';
import { Modal } from 'react-bootstrap';

import './AddressModal.scss';

import MyButton from '~/components/Button';
import { Context } from '../../../../../stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddrModalContext } from './AddressModal';
function SelectAddr() {
    const [state, dispatch] = useContext(Context);
    console.log(dispatch);
    const addresses = state.addresses;

    const value = useContext(AddrModalContext);
    const { show, handleClose, setModalShow } = value;

    console.log('Select modal');

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>Địa chỉ nhận hàng</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {addresses.map((item, index) => {
                    return (
                        <div key={index} className="d-flex align-items-start mx-4 py-4 border-bottom">
                            <input type={'radio'} defaultChecked={item.active} name="a" />
                            <div className="mx-3">
                                <p className="font-weight-bold">{item.receiverName}</p>
                                <p>{item.phoneNumber}</p>
                                <p>
                                    {`${item.addr.details}, 
                        ${item.addr.ward}, 
                        ${item.addr.district}, 
                        ${item.addr.city}`}
                                </p>
                                {item.default && (
                                    <MyButton outline disabled className="text-danger opacity-100 font-weight-normal">
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
                    className="border my-4 font-weight-normal px-5"
                    leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    onClick={() => setModalShow(2)}
                >
                    Địa chỉ mới
                </MyButton>
            </Modal.Body>
            <Modal.Footer>
                <MyButton outline className="border font-weight-normal px-5" onClick={handleClose}>
                    Huỷ
                </MyButton>
                <MyButton primary user onClick={handleClose}>
                    Xác nhận
                </MyButton>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectAddr;
