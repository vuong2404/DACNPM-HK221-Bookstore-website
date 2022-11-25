import MyButton from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import Status from '~/components/OrderStatus/OrderStatus';
const cx = classNames.bind(styles);

function OrderItem({ order }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h5>{order.addrInfo.name}</h5>
                <p>{order.time}</p>
            </div>
            <p className={cx('order-id')}>ID: {order.id}</p>
            <div className={cx('order-status')}>
                <MyButton text outline disabled className={cx('total-cost')}>
                    Tổng đơn: <span>660</span>
                </MyButton>
                <Status className={cx('status')} type={order.status} />
                {order.code && (
                    <Status className={cx('code-delivery')} type={order.status}>
                        {order.code}{' '}
                    </Status>
                )}
            </div>
            <MyButton to={`details?id=${order.id}`} text outline>
                Xem chi tiết
            </MyButton>
        </div>
    );
}

export default OrderItem;
