import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './MangeProfile.module.scss';
import Navi from '../../component/Navi/Navi';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import OrderHistoryItem from '../../component/OrderHistory/OrderHistoryItem';

const cx = classNames.bind(styles);
const bookType = ['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn', 'Học đường', 'Khoa học', 'Trẻ em', 'Manga'];
const orderList = [
    {
        orderID: 'MS00001',
        supID: 'MS0000A',
        time: '27/11/2022 12:12:30',
        status: 'waitting',
        status2: 'Theo dõi',
    },
    { orderID: 'MS00002', supID: 'MS0000B', time: '27/11/2022 12:12:30', status: 'intrans', status2: 'Đánh giá' },
    { orderID: 'MS00003', supID: 'MS0000C', time: '27/11/2022 12:12:30', status: 'success', status2: 'Hủy' },
    {
        orderID: 'MS00004',
        supID: 'MS0000D',
        time: '27/11/2022 12:12:30',
        status: 'confirmed',
        status2: 'Theo dõi',
    },
];

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
                        <OrderHistoryItem
                            orderID={orderList[0].orderID}
                            supID={orderList[0].supID}
                            time={orderList[0].time}
                            status={orderList[0].status}
                            status2={orderList[0].status2}
                        ></OrderHistoryItem>
                        <OrderHistoryItem
                            orderID={orderList[1].orderID}
                            supID={orderList[1].supID}
                            time={orderList[1].time}
                            status={orderList[1].status}
                            status2={orderList[1].status2}
                        ></OrderHistoryItem>
                        <OrderHistoryItem
                            orderID={orderList[2].orderID}
                            supID={orderList[2].supID}
                            time={orderList[2].time}
                            status={orderList[2].status}
                            status2={orderList[2].status2}
                        ></OrderHistoryItem>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ViewOrderHistory;
