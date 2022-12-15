import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import images from '~/assets/images';
import Price from '~/components/PriceDisplay/Price';
import { selectItem, removeCartItem, updateCart } from '../../../../stores/actions';
import { Context } from '../../../../stores';
import styles from './CartItem.module.scss';

const cx = classNames.bind(styles);

function CartItem({ cartItem }) {
    const [state, dispatch] = useContext(Context);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const handleClose = () => setConfirmDelete(false);
    const handleConfirm = () => {
        dispatch(removeCartItem(cartItem.product.id));
        handleClose();
    };

    // Xử lý xoá sản phẩm khỏi giỏ hàng
    const handleRemoveCart = () => {
        dispatch(removeCartItem(cartItem.product.id));
    };

    // Xử lý giảm sản phẩm
    const handleDecrease = () => {
        if (cartItem.count === 1) {
            setConfirmDelete(true);
        } else dispatch(updateCart(cartItem.count--));
    };

    // Xử lý tăng sản phẩm
    const handleIncrease = () => {
        dispatch(updateCart(cartItem.count++));
    };
    return (
        <div className={cx('wrapper')}>
            <input
                type={'checkbox'}
                key={Math.random()}
                defaultChecked={cartItem.isSelected}
                onChange={(e) => {
                    dispatch(selectItem(cartItem.product.id));
                }}
            />
            <img src={cartItem.product.image} alt="" />
            <div className={cx('book-info')}>
                <p>{cartItem.product.title}</p>
                <Price primary>{cartItem.product.price}</Price>
            </div>

            <div className={cx('quantity-controller')}>
                <FontAwesomeIcon size="lg" icon={faSquareMinus} onClick={handleDecrease} />
                <span>{cartItem.count}</span>
                <FontAwesomeIcon size="lg" icon={faSquarePlus} onClick={handleIncrease} />
            </div>

            <Button onClick={handleRemoveCart} className={cx('remove-btn')} variant="danger">
                Xoá
            </Button>

            <Modal
                className={cx('modal-custom')}
                show={confirmDelete}
                onHide={handleClose}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Xác nhận xoá sản phẩm khỏi giỏ hàng</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CartItem;
