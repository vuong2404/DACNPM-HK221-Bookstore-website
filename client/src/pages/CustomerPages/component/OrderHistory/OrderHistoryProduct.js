import classNames from 'classnames/bind';
import styles from './OrderHistoryProduct.module.scss';

const cx = classNames.bind(styles);

function OrderHistoryProduct(props) {
    return (
        <div className={cx('post-item')}>
            <img src={props.image} className={cx('book-image')}></img>
            <div className={cx('content')}>
                <div className={cx('book-name')}>Tên sách: {props.name}</div>
                <div className={cx('book-author')}>Tác giả: {props.author}</div>
                <div className={cx('')}>Giá bán: {props.price}</div>
                <div className={cx('')}>Số lượng: {props.amount}</div>
            </div>
            <div className={cx('booksPrice')}>Thành tiền: {props.price * props.amount}</div>
        </div>
    );
}

export default OrderHistoryProduct;
