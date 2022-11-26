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

const cx = classNames.bind(styles);
const a = Math.floor(Math.random() * 10);
const bookType = ['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn', 'Học đường', 'Khoa học', 'Trẻ em', 'Manga'];
function ViewProfile() {
    return (
        <>
            <DefaultLayout>
                <Navi cates={bookType} />
                <div style={{ maxWidth: 1200 }} className={cx('parent-viewProfile')}>
                    <div className={cx('item1-viewProfile')}>
                        <div className={cx('username-viewProfile')}>
                            <b>USERNAME</b>
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
                                <b style={{ paddingRight: 150 }}>Tên người dùng:</b>
                                <p>{user[a].username}</p>
                            </div>
                            <div className={cx('contentItem-viewProfile')}>
                                <b style={{ paddingRight: 195 }}>Họ và tên:</b>
                                <p>{user[a].name}</p>
                            </div>
                            <div className={cx('contentItem-viewProfile')}>
                                <b style={{ paddingRight: 224 }}>Email:</b>
                                <p>{user[a].email}</p>
                            </div>
                            <div className={cx('contentItem-viewProfile')}>
                                <b style={{ paddingRight: 169 }}>Số điện thoại:</b>
                                <p> {user[a].phone}</p>
                            </div>
                            <div className={cx('contentItem-viewProfile')}>
                                <b style={{ paddingRight: 205 }}>Giới tính:</b>
                                <p>{user[a].gender}</p>
                            </div>
                            <div className={cx('contentItem-viewProfile')}>
                                <b style={{ paddingRight: 193 }}>Ngày sinh:</b>
                                <p>{user[a].bdate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default ViewProfile;
