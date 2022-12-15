import { Link } from 'react-router-dom';
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
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-header')}>
                <Link to="/" className={cx('logo-wrapper')}>
                    <img className={cx('logo')} src={images.logo} alt="...." />
                    <h1>iceTeaBook</h1>
                </Link>
                <div className={cx('searching')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('iconSearch')} />
                    <input className={cx('search-bar')}></input>
                </div>

                <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} className={cx('iconCart')} />
                </Link>

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
