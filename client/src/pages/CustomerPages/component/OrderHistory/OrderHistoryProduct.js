import classNames from 'classnames/bind';
import styles from './OrderHistoryProduct.module.scss';
import MyButton from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function OrderHistoryProduct(props) {
    return (
        <div className={cx('post-item')}>
            <img src={props.urlBook} className={cx('book-image')} alt="..."></img>
            <div className={cx('content')}>
                <div className={cx('book-name')}>Tên sách: {props.title}</div>
                <div className={cx('book-author')}>Tác giả: {props.author}</div>
                <div className={cx('book-price')}>Giá bán: {props.price}</div>

                <div className={cx('')}>Số lượng: {props.quantity}</div>
            </div>
            <div className={cx('content')}></div>
            <div className={cx('content')}></div>
            <MyButton className={cx('booksPrice')}>Thành tiền: {props.totalMoney}</MyButton>
        </div>
    );
}

export default OrderHistoryProduct;
