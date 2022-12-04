import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from '../pages/AdminPage.module.scss';
// import './ManageCustomer.scss';

import MyButton from '~/components/Button';
const cx = classNames.bind(styles);


function ManageCustomerFilter() {
    return (
        <DefaultLayout>
            <div className={cx('member-wrapper')}>
                <br />
                <h2>Tìm kiếm khách hàng</h2>
                <div className={cx('add-view')}>
                    <form>
                        <div>
                            <label style={{ marginLeft: '2em' }}>Giới tính </label>
                            <br />
                            <input style={{ marginLeft: '4em' }} type="radio" name="sex" value="Nam" id="nam" /> <label for="nam">Nam</label>
                            <input style={{ marginLeft: '2em' }} type="radio" name="sex" value="Nữ" id="nu" /> <label for="nu">Nữ</label>
                            <input style={{ marginLeft: '2em' }} type="radio" name="sex" value="Tất cả" id="all" /> <label for="all">Tất cả</label>
                        </div>
                        <br />
                        <div>
                            <label style={{ marginLeft: '2em' }}>Thời gian đăng ký </label>
                            <br />

                            <input type="button" style={{ marginLeft: '4em' }} className={cx('choice')} value="1 tháng">
                            </input>

                            <input type="button" className={cx('choice')} value="3 tháng">
                            </input>

                            <input type="button" className={cx('choice')} value="6 tháng">
                            </input>

                            <input type="button" className={cx('choice')} value="1 năm">
                            </input>
                        </div>
                        <br /><br />
                        <div className={cx('button-field')}>
                            <MyButton className="btn btn-primary btn-lg w-25" to="/member">
                                Quay lại
                            </MyButton>

                            <MyButton className="btn btn-primary btn-lg w-25" to="/member">
                                Tìm kiếm
                            </MyButton>
                        </div>
                    </form>
                </div>
            </div >
        </DefaultLayout >
    )
}

export default ManageCustomerFilter;
