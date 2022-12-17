import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import Price from '~/components/PriceDisplay/Price';
import { Context } from '../../../../stores';
import styles from './CartItem.module.scss';
import { getCartAPI, removeCartItem, removeCartItemAPI, updateCartItemAPI, updateCartItemAPi } from '~/api/CartAPI';
import { selectItem, setCart, updateCart } from '~/stores/actions';

const cx = classNames.bind(styles);

function CartItem({ cartItem }) {
    const [state, dispatch] = useContext(Context);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const handleClose = () => setConfirmDelete(false);

    const handleConfirm = async () => {
        await handleRemoveCart();
        handleClose();
    };

    // Xử lý xoá sản phẩm khỏi giỏ hàng
    const handleRemoveCart = async () => {
        await removeCartItemAPI(cartItem.bookId);
        await getCartAPI().then((res) => dispatch(setCart(res)));
        console.log("cart: ", state.cart)
    };

    // Xử lý giảm sản phẩm
    const handleDecrease = async () => {
        if (cartItem.count === 1) {
            setConfirmDelete(true);
        } else {
            await updateCartItemAPI({ bookId: cartItem.cartId, quantity: cartItem.quantity - 1 });
            dispatch(updateCart(cartItem.quantity--));
        }
    };

    // Xử lý tăng sản phẩm
    const handleIncrease = async () => {
        await updateCartItemAPI({ bookId: cartItem.bookId, quantity: cartItem.quantity + 1 });
        dispatch(updateCart(cartItem.quantity++));
    }; 

    
    console.log(cartItem);
    return (
        <div className={cx('wrapper')}>
            <input
                type={'checkbox'}
                key={Math.random()}
                defaultChecked={cartItem.isSelected}
                onChange={(e) => {
                    dispatch(selectItem(cartItem.bookId));
                }}
            />
            <img src={cartItem.urlBook} alt="" />
            <div className={cx('book-info')}>
                <p>{cartItem.title}</p>
                <Price primary>{cartItem.price}</Price>
            </div>

            <div className={cx('quantity-controller')}>
                <FontAwesomeIcon size="lg" icon={faSquareMinus} onClick={handleDecrease} />
                <span>{cartItem.quantity}</span>
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
