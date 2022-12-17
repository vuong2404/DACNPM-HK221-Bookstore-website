import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './MangeProfile.module.scss';
import Navi from '../../component/Navi/Navi';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import OrderHistoryItem from '../../component/OrderHistory/OrderHistoryItem';
import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = (url) => fetch(url).then((r) => r.json());
const cx = classNames.bind(styles);
const bookType = ['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn', 'Học đường', 'Khoa học', 'Trẻ em', 'Manga'];

function ViewOrderHistory() {
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
                        <Link to="/editProfile">
                            <b>CHỈNH SỬA THÔNG TIN</b>
                        </Link>
                    </button>
                </div>
                <div className={cx('item2-viewProfile')}>
                    <h3 className={cx('text1-viewProfile')}>LỊCH SỬ ĐẶT HÀNG</h3>
                    <h4 className={cx('text2-viewProfile')}>Quản lý tài khoản của bạn</h4>
                    <hr></hr>
                    {/* <input type="text" value="   Tìm kiếm tên sách" className={cx('search-ViewOrderHistory')} /> */}
                    <div className={cx('searching')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('iconSearch')} />
                        <input placeholder="Nhập để tìm kiếm" className={cx('search-bar')}></input>
                    </div>
                    {/* <div style={{ overflow: 'auto', height: 800, marginTop: 20 }}> */}
                    <div style={{ marginTop: 20 }}>
                        <OrderHistoryItem></OrderHistoryItem>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ViewOrderHistory;
