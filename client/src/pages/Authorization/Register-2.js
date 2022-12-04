import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './forAuthorization.scss';
import DefaultLayout from './DefaultLayout';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Register2() {
    return (
        <DefaultLayout>
            <div className={cx('authorization-wrapper')}>
                <div className={cx('form')}>
                    <div className={cx('box')}>
                        <form action="./">
                            <h2 class="header">Đăng ký</h2>
                            <br></br>
                            <div>
                                <input type="text" placeholder="User name" />
                            </div>
                            <div>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div>
                                <input type="password" placeholder="Confirm password" />
                            </div>
                            <button id='btnDangnhap' class="submit" type="submit">
                                Đăng ký
                            </button>
                        </form>
                        <a href="./Register-1">
                            <div class="goto">Đổi số điện thoại khác</div>
                        </a>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Register2;