import { Link } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
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

const adminOption = [
    {
        name: 'Tài khoản của tôi',
        to: '/myaccout',
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
                <Link to="/admin" className={cx('logo-wrapper')}>
                    <img className={cx('logo')} src={images.logo} alt="...." />
                    {/* <span>IceBook</span> */}
                </Link>
                <ul className={cx('menu')}>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/manage-book">Quản lý sách</Link>
                    </li>
                    <li>
                        <Link to="/member">Thành viên</Link>
                    </li>
                    <li>
                        <Link to="/manage-order">Đơn hàng</Link>
                    </li>
                    <li>
                        <Link to="/">Thông báo</Link>
                    </li>
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
