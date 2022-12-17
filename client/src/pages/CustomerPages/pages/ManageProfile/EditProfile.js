import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './MangeProfile.module.scss';
import Navi from '../../component/Navi/Navi';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import fetch from 'unfetch';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';

const fetcher = (url) => fetch(url).then((r) => r.json());

const cx = classNames.bind(styles);
const bookType = ['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn', 'Học đường', 'Khoa học', 'Trẻ em', 'Manga'];
function EditProfile() {
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
                                  <Link to="/viewProfile">
                                      <b>XEM HỒ SƠ</b>
                                  </Link>
                              </button>
                              <button className={cx('button2')}>
                                  <Link to="/viewOrderHistory">
                                      <b>LỊCH SỬ ĐẶT HÀNG</b>
                                  </Link>
                              </button>
                          </div>
                          <div className={cx('item2-viewProfile')}>
                              <h3 className={cx('text1-viewProfile')}>CHỈNH SỬA THÔNG TIN</h3>
                              <h4 className={cx('text2-viewProfile')}>Quản lý tài khoản của bạn</h4>
                              <hr></hr>
                              <div className={cx('content-viewProfile')}>
                                  <div className={cx('contentItem-viewProfile')}>
                                      <b style={{ paddingRight: 195 }}>Họ và tên:</b>
                                      <Input placeholder={item['fullName']} />
                                      <input type="submit" hidden></input>
                                  </div>
                                  <div className={cx('contentItem-viewProfile')}>
                                      <b style={{ paddingRight: 224 }}>Email:</b>
                                      <Input placeholder={item['email']} />
                                  </div>
                                  <div className={cx('contentItem-viewProfile')}>
                                      <b style={{ paddingRight: 169 }}>Số điện thoại:</b>
                                      <Input placeholder={item['phoneNum']} />
                                  </div>
                                  <div className={cx('contentItem-viewProfile')}>
                                      <b style={{ paddingRight: 205 }}>Giới tính:</b>
                                      <div class="radio-wrap">
                                          <div class="radio">
                                              <Input class="radio-1" name="radio" type="radio" checked />
                                              <label for="radio-1" class="radio-label">
                                                  Nam
                                              </label>
                                          </div>

                                          <div class="radio">
                                              <Input class="radio-2" name="radio" type="radio" />
                                              <label for="radio-2" class="radio-label">
                                                  Nữ
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={cx('contentItem-viewProfile')}>
                                      <b style={{ paddingRight: 195 }}>Ngày sinh:</b>
                                      <Input placeholder={item['birthDate']} />
                                  </div>
                                  <div className={cx('contentItem-viewProfile')}>
                                      <b style={{ paddingRight: 217 }}>Địa chỉ:</b>
                                      <Input placeholder={item['address']} />
                                  </div>
                              </div>
                              <div class="button-save">
                                  <Link to="/viewProfile">
                                      <Button className={cx('cancel')}>Hủy</Button>
                                  </Link>
                                  <Link to="/viewProfile">
                                      <Button className={cx('change-inf')}>Lưu thay đổi</Button>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </DefaultLayout>
    );
}

export default EditProfile;
