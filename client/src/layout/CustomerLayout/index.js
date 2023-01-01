import classNames from 'classnames/bind';
import Footer from '../../components/Customer/Footer/Footer';
import Header from '~/components/Customer/Header/Header';

import styles from './CustomerLayout.module.scss';

const cx = classNames.bind(styles);

function CustomerLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default CustomerLayout;
