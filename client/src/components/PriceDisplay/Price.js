import classNames from 'classnames/bind';
import styles from './Price.module.scss';

const cx = classNames.bind(styles);

function Price({ large, className, children }) {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
    const formatter = new Intl.NumberFormat('vi-VN', config);
    return <span className={cx('price', { [className]: className, large })}>{formatter.format(children)}</span>;
}

export default Price;
