import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './forAuthorization.scss';
import DefaultLayout from './DefaultLayout';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Register1() {
    return (
        <DefaultLayout>
            <div className={cx('authorization-wrapper')}>
                <div className={cx('form')}>
                    <div className={cx('box')}>
                        <h2 class="header">Đăng ký</h2>
                        <form action='./Register-2'>

                            <div>
                                <input type="text" placeholder="Số điện thoại" required />
                                {/* <button class="get-code">
                                        Lấy mã xác nhận
                                    </button> */}
                            </div>

                            {/* <div>
                                <input type="text" placeholder="Mã xác nhận" />
                            </div> */}

                            <button class="submit" type="submit">
                                Xác nhận
                            </button>
                        </form>
                        <a href="./Login">
                            <div class="goto">Đã có tài khoản? Đăng nhập </div>
                        </a>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Register1;