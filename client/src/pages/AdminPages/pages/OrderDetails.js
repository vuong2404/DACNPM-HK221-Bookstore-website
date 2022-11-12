import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './scss/AdminPage.module.scss';
import DefaultLayout from '../DefaultLayout';
import MyButton from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Status from '~/components/OrderStatus/OrderStatus';
const cx = classNames.bind(styles);

function OrderDetail() {
    const { id } = useParams();
    console.log(id);

    return (
        <DefaultLayout>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <MyButton
                        className={cx('back')}
                        to="/manage-order"
                        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                    >
                        Trở về
                    </MyButton>
                    <span className={cx('order-id')}>aaaaa</span>
                    <Status type="success" />
                </div>

                <a href="#" className={cx('user-name')}>
                    Nguyễn Văn A
                </a>
                <span>Ngày đặt hàng: 12/4/2022 12:22:23</span>
            </div>
        </DefaultLayout>
    );
}

export default OrderDetail;
