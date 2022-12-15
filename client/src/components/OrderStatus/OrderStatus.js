import classNames from 'classnames/bind';
import MyButton from '../Button';
import styles from './OrderStatus.module.scss';

const cx = classNames.bind(styles);

function Status({ type = 'waiting', title = '', onClick, className, children, ...passProps }) {
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
                (type === 'waiting' && 'Đang chờ') ||
                (type === 'confirmed' && 'Đã xác nhận') ||
                (type === 'success' && 'Nhận thành công') ||
                (type === 'cancel' && 'Đã hủy') ||
                (type === 'intrans' && 'Đang vận chuyển') ||
                (type === 'faild' && 'Phát thất bại')}
        </MyButton>
    );
}

export default Status;
