import classNames from 'classnames/bind';
import styles from './OrderHistoryItem.module.scss';

const cx = classNames.bind(styles);

function OrderHistoryItem(props) {
    return (
        <div className={cx('post-item')}>
            <img src={props.image} className={cx('book-image')}></img>
            <div className={cx('content')}>
                <div className={cx('book-name')}>Tên sách: {props.name}</div>
                <div className={cx('book-author')}>Tác giả: {props.author}</div>
                <div className={cx('button-container')}>
                    <div className={cx('book-price')}>Giá bán: {props.price}</div>
                    <div className={cx('buy-again')}>BUY AGAIN</div>
                </div>
            </div>
        </div>
    );
}

export default OrderHistoryItem;
