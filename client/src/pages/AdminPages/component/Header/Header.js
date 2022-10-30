import { Link } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-header')}>
                <img className={cx('logo')} src={images.logo} alt="...." />
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

                <button className={cx('user')}>
                    <p>Admin</p>
                    <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                </button>
            </div>
        </header>
    );
}

export default Header;
