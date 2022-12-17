import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './MangeProfile.module.scss';
import Navi from '../../component/Navi/Navi';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import fetch from 'unfetch';
import Button from '../../component/Button/Button';

const fetcher = (url) => fetch(url).then((r) => r.json());

const cx = classNames.bind(styles);
const bookType = ['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn', 'Học đường', 'Khoa học', 'Trẻ em', 'Manga'];

function ViewProfile() {
    var user_id = JSON.parse(sessionStorage.getItem('user')).id;
    const { data } = useSWR(`http://localhost:8080/api/user/${user_id}`, fetcher);
    if (!sessionStorage.getItem('user')) {
        return (
            <div className={cx('warning')}>
                <Link to="/login">
                    <Button>
                        <h1>Bạn cần đăng nhập</h1>
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <DefaultLayout>
                <Navi cates={bookType} />
                {data
                    ? data.map((item) => (
                          <div style={{ maxWidth: 1200 }} className={cx('parent-viewProfile')}>
                              <div className={cx('item1-viewProfile')}>
                                  <div className={cx('username-viewProfile')}>
                                      <b>{item['fullName']}</b>
                                  </div>
                                  <button className={cx('button1')}>
                                      <Link to="/editProfile">
                                          <b>CHỈNH SỬA THÔNG TIN</b>
                                      </Link>
                                  </button>
                                  <button className={cx('button2')}>
                                      <Link to="/viewOrderHistory">
                                          <b>LỊCH SỬ ĐẶT HÀNG</b>
                                      </Link>
                                  </button>
                              </div>
                              <div className={cx('item2-viewProfile')}>
                                  <h3 className={cx('text1-viewProfile')}>HỒ SƠ CỦA TÔI</h3>
                                  <h4 className={cx('text2-viewProfile')}>Quản lý tài khoản của bạn</h4>
                                  <hr></hr>
                                  <div className={cx('content-viewProfile')}>
                                      <div className={cx('contentItem-viewProfile')}>
                                          <b style={{ paddingRight: 160 }}>ID người dùng:</b>
                                          <p>{item['userId']}</p>
                                      </div>
                                      <div className={cx('contentItem-viewProfile')}>
                                          <b style={{ paddingRight: 195 }}>Họ và tên:</b>
                                          <p>{item['fullName']}</p>
                                      </div>
                                      <div className={cx('contentItem-viewProfile')}>
                                          <b style={{ paddingRight: 224 }}>Email:</b>
                                          <p>{item['email']}</p>
                                      </div>
                                      <div className={cx('contentItem-viewProfile')}>
                                          <b style={{ paddingRight: 169 }}>Số điện thoại:</b>
                                          <p> {item['phoneNum']}</p>
                                      </div>
                                      <div className={cx('contentItem-viewProfile')}>
                                          <b style={{ paddingRight: 205 }}>Giới tính:</b>
                                          <p>{item['gender']}</p>
                                      </div>
                                      <div className={cx('contentItem-viewProfile')}>
                                          <b style={{ paddingRight: 193 }}>Ngày sinh:</b>
                                          <p>{item['birthDate']}</p>
                                      </div>
                                      <div className={cx('contentItem-viewProfile')}>
                                          <b style={{ paddingRight: 215 }}>Địa chỉ:</b>
                                          <p>{item['address']}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </DefaultLayout>
        </>
    );
}

export default ViewProfile;
