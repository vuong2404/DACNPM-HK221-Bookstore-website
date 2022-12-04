import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('container')}>{children}</div>
        </div>

    );
}

export default DefaultLayout;
