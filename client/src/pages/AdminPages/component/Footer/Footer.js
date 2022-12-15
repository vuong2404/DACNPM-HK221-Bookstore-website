import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return <p className={cx('footer')}> @iceTea Bookstore </p>;
}

export default Footer;
