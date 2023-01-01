import classNames from 'classnames/bind';

import Header from '~/components/admin/Header/Header';
import Footer from '~/components/admin/Footer/Footer';
import styles from './AdminLayout.module.scss';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default AdminLayout;
