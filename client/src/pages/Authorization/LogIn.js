import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './forAuthorization.scss';
import DefaultLayout from './DefaultLayout';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


/*
    function validateform() {
        var username = document.Login.username.value;
        var password = document.myform.password.value;

        if (username == null || username == "") {
            alert("Username can't be blank");
            return false;
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
    }
*/



function LogIn() {
    return (
        <DefaultLayout>
            <div className={cx('authorization-wrapper')}>
                <div className={cx('form')}>
                    <div class="box">
                        <h2 class="header">Đăng nhập</h2>
                        <form name="Login" action="./" onsubmit="return validateform()">
                            <div>
                                <input type="text" name="username" placeholder="User name" />
                            </div>
                            <div>
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            <button className={cx('submit')} type="submit">
                                Đăng nhập
                            </button>
                        </form>
                        <a href="./Forgot">
                            <div class="goto">Quên mật khẩu</div>
                        </a>
                        <a href="./Register-1">
                            <div class="goto" to="./Register-1">Tạo tài khoản mới</div>
                        </a>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default LogIn;