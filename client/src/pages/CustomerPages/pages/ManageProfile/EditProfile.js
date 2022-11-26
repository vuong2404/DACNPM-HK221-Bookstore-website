import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './MangeProfile.module.scss';
import Navi from '../../component/Navi/Navi';
import { Link } from 'react-router-dom';

const user = [
    {
        username: 'IceTea1702',
        name: 'Nguyễn Kim Tiến',
        email: 'tien.nguyenctcxht11@hcmut.edu.vn',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '17/02/2002',
    },
    {
        username: 'username1',
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username2',
        name: 'Nguyễn Văn B',
        email: 'nguyenvanb@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username3',
        name: 'Nguyễn Văn C',
        email: 'nguyenvanc@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username4',
        name: 'Nguyễn Văn D',
        email: 'nguyenvand@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username5',
        name: 'Nguyễn Văn E',
        email: 'nguyenvane@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username6',
        name: 'Nguyễn Văn F',
        email: 'nguyenvanf@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username7',
        name: 'Nguyễn Văn G',
        email: 'nguyenvang@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username8',
        name: 'Nguyễn Văn H',
        email: 'nguyenvanh@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username9',
        name: 'Nguyễn Văn I',
        email: 'nguyenvani@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
    {
        username: 'username10',
        name: 'Nguyễn Văn K',
        email: 'nguyenvank@gmail.com',
        phone: '0923236277',
        gender: 'Nam',
        bdate: '15/06/2002',
    },
];

const a = Math.floor(Math.random() * 10);

const cx = classNames.bind(styles);
const bookType = ['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn', 'Học đường', 'Khoa học', 'Trẻ em', 'Manga'];
function EditProfile() {
    return (
        <DefaultLayout>
            <Navi cates={bookType} />
            <div style={{ maxWidth: 1200 }} className={cx('parent-viewProfile')}>
                <div className={cx('item1-viewProfile')}>
                    <div className={cx('username-viewProfile')}>
                        <b>USERNAME</b>
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
                            <b style={{ paddingRight: 150 }}>Tên người dùng:</b>
                            <input placeholder={user[a].username} />
                        </div>
                        <div className={cx('contentItem-viewProfile')}>
                            <b style={{ paddingRight: 195 }}>Họ và tên:</b>
                            <input placeholder={user[a].name} />
                        </div>
                        <div className={cx('contentItem-viewProfile')}>
                            <b style={{ paddingRight: 224 }}>Email:</b>
                            <input placeholder={user[a].email} />
                        </div>
                        <div className={cx('contentItem-viewProfile')}>
                            <b style={{ paddingRight: 169 }}>Số điện thoại:</b>
                            <input placeholder={user[a].phone} />
                        </div>
                        <div className={cx('contentItem-viewProfile')}>
                            <b style={{ paddingRight: 205 }}>Giới tính:</b>
                            <div class="radio-wrap">
                                <div class="radio">
                                    <input class="radio-1" name="radio" type="radio" checked />
                                    <label for="radio-1" class="radio-label">
                                        Nam
                                    </label>
                                </div>

                                <div class="radio">
                                    <input class="radio-2" name="radio" type="radio" />
                                    <label for="radio-2" class="radio-label">
                                        Nữ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={cx('contentItem-viewProfile')}>
                            <b style={{ paddingRight: 195 }}>Ngày sinh:</b>
                            <input placeholder={user[a].bdate} />
                        </div>
                    </div>
                    <div class="button-save">
                        <Link to="/viewProfile">
                            <button className={cx('cancel')}>Hủy</button>
                        </Link>
                        <Link to="/viewProfile">
                            <button className={cx('change-inf')}>Lưu thay đổi</button>
                        </Link>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default EditProfile;
