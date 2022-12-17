import classNames from 'classnames/bind';
import styles from './OrderHistoryItem.module.scss';
import OrderHistoryProduct from './OrderHistoryProduct';
import Status from '~/components/OrderStatus/OrderStatus';
import MyButton from '~/components/Button';
import Button from './../Button/Button';
import useSWR from 'swr';
import fetch from 'unfetch';
import { Link } from 'react-router-dom';

const fetcher = (url) => fetch(url).then((r) => r.json());
const cx = classNames.bind(styles);

function StatusSame({ type = 'watting', title = '', onClick, className, children, ...passProps }) {
    const classes = [
        cx('wrapper', {
            [type]: type,
            ...classNames,
        }),
    ];

    const props = { onClick, ...passProps };
    return (
        <MyButton className={classes} {...props}>
            {children ||
                title ||
                (type === 'waiting' && 'Hủy') ||
                (type === 'confirmed' && 'Xem chi tiết') ||
                (type === 'success' && 'Đánh giá') ||
                (type === 'cancel' && 'Mua lại') ||
                (type === 'intrans' && 'Xem chi tiết') ||
                (type === 'undelivered' && 'Hủy')}
        </MyButton>
    );
}

function OrderHistoryItem() {
    var user_id = JSON.parse(sessionStorage.getItem('user')).id;
    const { data } = useSWR(`http://localhost:8080/api/user/order/${user_id}`, fetcher);
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
        <div>
            <div className={cx('container')}>
                {data
                    ? data.map((item) => (
                          <div className={cx('container2')}>
                              <div className={cx('item1')}>
                                  <div className={cx('item1-1')}>Mã đơn hàng: {item.orderID}</div>
                                  <div className={cx('item1-2')}>Mã đơn vị vận chuyển: {item.deliveryCode}</div>
                              </div>
                              <div className={cx('item2')}>
                                  <div className={cx('item2-1')}>Đã đặt ngày: {item.createAt}</div>
                                  <div className={cx('item2-2')}>
                                      <Status type={item.status} />
                                  </div>
                              </div>

                              <div className={cx('item3')}>
                                  {item
                                      ? item['books'].map((number) => (
                                            <OrderHistoryProduct
                                                key={number['bookID']}
                                                urlBook={number['urlBook']}
                                                title={number['title']}
                                                quantity={number['quantity']}
                                                totalMoney={number['totalMoney']}
                                                author={number['author']}
                                                price={number['price']}
                                            ></OrderHistoryProduct>
                                        ))
                                      : null}
                              </div>

                              <MyButton className={cx('item4')}>Tổng số tiền:{item.totalMoney}</MyButton>
                              <div className={cx('item5')}>
                                  <StatusSame className={cx('item5-1')} type={item.status} />
                                  <Button className={cx('item5-2')}>Mua lại</Button>
                                  <Button className={cx('item5-3')}>Liên hệ người bán</Button>
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default OrderHistoryItem;
