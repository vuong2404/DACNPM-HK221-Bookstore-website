import { Link } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/svg-arrow.css';

import styles from './Header.module.scss';
import UserOpt from '~/components/UserOption/UserOption';
// Admin homepage constants
export const adminOption = [
    {
        name: 'Tài khoản của tôi',
        to: '/myaccout',
    },
    {
        name: 'Đăng xuất',
        to: '/login',
    },
];

export const menu = [
    {
        name: 'Trang chủ',
        path: '/admin',
    },
    {
        name: 'Quản lý sách',
        path: '/manage-book',
    },
    {
        name: 'Thành viên',
        path: '/member',
    },
    {
        name: 'Đơn hàng',
        path: '/manage-order',
    },
    {
        name: 'Thông báo',
        path: '/notify',
    },
];



const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-header')}>
                <Link to="/admin" className={cx('logo-wrapper')}>
                    <img className={cx('logo')} src={require('~/assets/images/logo2.png')} alt="...." width={200}/>
                </Link>
                <ul className={cx('menu')}>
                    {menu.map((item, index) => (
                        <li key={index} className={window.location.pathname === item.path ? cx('active') : ''}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <Tippy
                    render={(attrs) => <UserOpt option={adminOption} />}
                    interactive
                    placement="bottom-end"
                    zIndex={999}
                >
                    <button className={cx('user')}>
                        <p>Admin</p>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                    </button>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
