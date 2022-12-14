import classNames from 'classnames/bind';
import styles from './OrderHistoryItem.module.scss';
import OrderHistoryProduct from './OrderHistoryProduct';
import Status from '~/components/OrderStatus/OrderStatus';
import MyButton from '~/components/Button';
import Button from './../Button/Button';
import useSWR from 'swr';
import fetch from 'unfetch';

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

function OrderHistoryItem(props) {
    const { data } = useSWR('http://localhost:8080/api/user/order/1000000', fetcher);
    return (
        <div className={cx('container')}>
            <div className={cx('item1')}>
                <div className={cx('item1-1')}>Mã đơn hàng: {props.orderID}</div>
                <div className={cx('item1-2')}>Mã đơn vị vận chuyển: {props.deliveryCode}</div>
            </div>
            <div className={cx('item2')}>
                <div className={cx('item2-1')}>Đã đặt ngày: {props.createAt}</div>
                <div className={cx('item2-2')}>
                    <Status type={props.status} />
                </div>
            </div>
            <div className={cx('item3')}>
                {data[0].books
                    ? data[0].books.map((item) => (
                          <OrderHistoryProduct
                              image="https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2"
                              title={item['title']}
                              quantity={item['quantity']}
                              totalMoney={item['totalMoney']}
                              author={item['author']}
                              price={item['price']}
                          ></OrderHistoryProduct>
                      ))
                    : null}
            </div>
            <MyButton className={cx('item4')}>Tổng số tiền:{props.totalMoney}</MyButton>
            <div className={cx('item5')}>
                <StatusSame className={cx('item5-1')} type={props.status} />
                <Button className={cx('item5-2')}>Mua lại</Button>
                <Button className={cx('item5-3')}>Liên hệ người bán</Button>
            </div>
        </div>
    );
}

export default OrderHistoryItem;
