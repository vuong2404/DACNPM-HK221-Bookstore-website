import classNames from 'classnames/bind';
import { useContext } from 'react';

import { Context } from '../../stores';
import styles from './Cart.module.scss';
import DefaultLayout from '../../DefaultLayout';
import CartItem from '~/pages/CustomerPages/component/CartItem/CartItem';
import Price from '~/components/PriceDisplay/Price';
import { selectAllProducts } from '../../stores/actions';
import EmptyCart from '../../component/EmptyCart/EmptyCart';
import MyButton from '~/components/Button';

const cx = classNames.bind(styles);

function Cart() {
    const [state, dispatch] = useContext(Context);
    const products = state.listBooks;

    let isSelectedAll = products.every((item) => item.isSelected);
    let ProductsCounter = products.reduce((res, item) => (item.isSelected ? item.count + res : res), 0);

    const handleSeclectAll = (isChecked) => {
        dispatch(selectAllProducts(isChecked));
    };

    return (
        <DefaultLayout>
            <div className={cx('heading')}>
                <h1>Giỏ hàng của bạn</h1>
            </div>

            <div className={cx('wrapper')}>
                <div className={cx('cart-wrapper')}>
                    {products.length > 0 ? (
                        products.map((item, index) => {
                            return <CartItem key={index} cartItem={item} />;
                        })
                    ) : (
                        <EmptyCart />
                    )}
                </div>

                <div className={cx('cart-action')}>
                    <div className={cx('select-all')}>
                        <input
                            type="checkBox"
                            key={Math.random()}
                            defaultChecked={isSelectedAll}
                            onChange={(e) => handleSeclectAll(e.target.checked)}
                        />
                        <span>
                            Chọn tất cả (<span>{products.length}</span>)
                        </span>
                    </div>
                    <div className={cx('calc-cost')}>
                        <b>
                            Tổng thanh toán(<span>{ProductsCounter}</span> sản phẩm):{' '}
                        </b>
                        <Price primary large>
                            {products.reduce(
                                (res, item) => (item.isSelected ? res + item.product.price * item.count : res),
                                0,
                            )}
                        </Price>
                    </div>

                    <MyButton to="/payment" primary user large>
                        Thanh toán
                    </MyButton>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Cart;
