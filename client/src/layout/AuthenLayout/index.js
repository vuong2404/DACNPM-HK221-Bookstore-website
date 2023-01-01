import classNames from 'classnames/bind';

import styles from './AuthenLayout.module.scss';

const cx = classNames.bind(styles);

function AuthenLayout({ children }) {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('container')}>{children}</div>
        </div>

    );
}

export default AuthenLayout;
