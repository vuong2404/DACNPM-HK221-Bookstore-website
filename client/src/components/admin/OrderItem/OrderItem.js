import MyButton from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import Status from '~/components/OrderStatus/OrderStatus';
import Price from '~/components/PriceDisplay/Price';
import moment from 'moment/moment';
const cx = classNames.bind(styles);

function OrderItem({ order }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h6>Người nhận: {order.receiverName}</h6>
                <p>{moment.utc(order.createAt).format('YYYY-MM-DD  HH:MM:SS') }</p>
            </div>
            <p className={cx('order-id')}>Mã đơn hàng: #{order.orderID}</p>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center me-4'>
                    <p className='m-0'> Tổng đơn: </p>
                    <Price className='ms-2 font-weight-bold'>{order.totalMoney}</Price>
                </div>
                <Status className={cx('status')} type={order.status} />
                {order.deliveryCode && (
                    <Status className={cx('code-delivery')} type={order.status}>
                        {order.deliveryCode}{' '}
                    </Status>
                )}
            </div>
            <MyButton to={`details?id=${order.orderID}`} className='mt-2' text outline>
                Xem chi tiết
            </MyButton>
        </div>
    );
}

export default OrderItem;
