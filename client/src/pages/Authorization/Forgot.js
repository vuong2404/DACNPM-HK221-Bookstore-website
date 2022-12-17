import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './forAuthorization.scss';
import DefaultLayout from './DefaultLayout';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Forgot() {
    return (
        <DefaultLayout>
            <div className={cx('authorization-wrapper')}>
                <div className={cx('form')}>
                    <div className={cx('box')}>
                        <form>
                            <h2 class="header">Tìm lại tài khoản</h2>
                            <input type="tel" placeholder="Nhập số điện thoại tìm lại tài khoản" required />
                            <button class="submit" type="submit">
                                Xác nhận
                            </button>
                        </form>
                        <a href="./LogIn">
                            <button class="submit">Huỷ</button>
                        </a>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Forgot;