import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faImage } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from '../pages/AdminPage.module.scss';

import MyButton from '~/components/Button';

const cx = classNames.bind(styles);

function ManageCustomerAdd() {
    return (
        <DefaultLayout>
            <div className={cx('member-wrapper')}>
                <br />
                <h2>Thêm khách hàng mới</h2>
                <div className={cx('add-view')}>
                    <form>
                        <div className={cx('field')}>
                            <div className="form-group">
                                <label>Họ và tên:  </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className={cx('field')}>
                            <div className="form-group">
                                <label>Email: </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className={cx('field')}>
                            <div className="form-group">
                                <label>Số điện thoại: </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className={cx('field')}>
                            <div className="form-group">
                                <label>Địa chỉ: </label>
                                <textarea type="text" className="form-control" rows="3" />
                            </div>
                        </div>
                        <div className={cx('button-field')}>
                            <MyButton className="btn btn-primary btn-lg" style={{ background: '#0c3b7c' }} to="/member"> Huỷ </MyButton>
                            <MyButton type="submit" className="btn btn-primary btn-lg" to="/member"> Thêm </MyButton>
                        </div>
                    </form>
                </div >
            </div >
        </DefaultLayout >
    )


}

export default ManageCustomerAdd;
