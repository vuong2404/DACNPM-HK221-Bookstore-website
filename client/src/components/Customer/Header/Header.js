import { Link, useNavigate } from 'react-router-dom';
import { faAngleDown, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/svg-arrow.css';

import images from '~/assets/images';
import styles from './Header.module.scss';
import UserOpt from '~/components/UserOption/UserOption';
import { useContext, useState } from 'react';
import { Context } from '~/stores';
import Price from '~/components/PriceDisplay/Price';
import Mybutton from '~/components/Button';

const cx = classNames.bind(styles);

const customerOption = [
    {
        name: 'Tài khoản của tôi',
        to: '/viewProfile',
    },
    {
        name: 'Đăng xuất',
        to: '/login',
    },
];
function Header() {
    const [state, dispatch] = useContext(Context);
    const [keySearch, setKeySearch] = useState('');

    if (!sessionStorage.user) {
        sessionStorage.setItem('user', JSON.stringify({ id: 1000000 }));
    }

    const navigate = useNavigate();
    async function handleDown() {
        return await navigate(`/search?key=${keySearch}`, { replace: true });
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-header') + ' container'}>
                <Link to="/" className={cx('logo-wrapper')}>
                    <img width={140} src={images.logo} alt="...." style={{ transform: 'translateX(13px)' }} />
                </Link>

                <div className={cx('searching')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('iconSearch')} />
                    <input
                        placeholder="Bạn cần tìm gì ?"
                        className={cx('search-bar') + ' p-2'}
                        onChange={(e) => setKeySearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                                handleDown();
                                e.target.value = '';
                            }
                        }}
                    ></input>
                </div>

                <div className="d-flex align-items-center">
                    <Tippy
                        render={(attrs) => {
                            return sessionStorage.getItem('user') ? (
                                state.cart && state.cart !== [] && state.cart.books && state.cart.books.length > 0 ? (
                                    <div
                                        {...attrs}
                                        tabIndex="-1"
                                        className={cx('arrow-top-end', 'popper') + ' shadow p-2 bg-white rounded'}
                                        style={{ height: '60vh', overflowY: 'scroll' }}
                                    >
                                        <div className="cart-list" style={{ marginBottom: 60 }}>
                                            {state.cart.books &&
                                                state.cart.books.map((item, index) => {
                                                    return (
                                                        <Link key={index} to={`/details?${item.id}`}>
                                                            <div className="d-flex align-items-start justify-content-start border-bottom py-3 px-2">
                                                                <img src={item.urlBook} alt="" width={'80px'} />
                                                                <div>
                                                                    <p className="text-overflow-ellipsis-2 mb-3 mr-3">
                                                                        {item.title}
                                                                    </p>
                                                                    <Price primary className="font-weight-bold ml-0">
                                                                        {item.price}
                                                                    </Price>
                                                                </div>
                                                                <span> Số lượng: {item.quantity}</span>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                        </div>

                                        <div
                                            className="d-flex justify-content-end bg-white py-2 border-top mx-3"
                                            style={{
                                                position: 'fixed',
                                                inset: 'auto 0 0 0',
                                                height: '60px',
                                            }}
                                        >
                                            <Mybutton user primary to="/cart">
                                                <span>Xem giỏ hàng</span>
                                            </Mybutton>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className={
                                            cx('arrow-top-end', 'popper') +
                                            ' shadow p-2 bg-white rounded d-flex flex-column align-items-center'
                                        }
                                    >
                                        <img src={images.emptyCart} alt="" width={'60%'} />
                                        <p className="text-dark">Chưa có sản phẩm</p>
                                    </div>
                                )
                            ) : (
                                ''
                            );
                        }}
                        interactive
                        placement="bottom-end"
                        zIndex={999}
                    >
                        <Link
                            onClick={() => {
                                !sessionStorage.getItem('user') &&
                                    alert('Vui lòng đăng nhập để thực hiện tính năng này!');
                            }}
                            to={`${sessionStorage.getItem('user') ? '/cart' : '/login'}`}
                            className="text-white d-flex align-items-center"
                        >
                            <div className="position-relative">
                                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                                <b
                                    className="position-absolute rounded-circle bg-white px-1 text-danger"
                                    style={{ top: -10, right: -10 }}
                                >
                                    {state.cart.books.length}
                                </b>
                            </div>
                        </Link>
                    </Tippy>
                </div>

                <Tippy
                    render={(attrs) => <UserOpt option={customerOption} />}
                    interactive
                    placement="bottom-end"
                    zIndex={999}
                >
                    <Link to="/viewProfile">
                        <button className={cx('user')}>
                            <FontAwesomeIcon className={cx('iconUser')} icon={faUser} />
                            <p>username</p>
                            <FontAwesomeIcon className={cx('iconDown')} icon={faAngleDown} />
                        </button>
                    </Link>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
