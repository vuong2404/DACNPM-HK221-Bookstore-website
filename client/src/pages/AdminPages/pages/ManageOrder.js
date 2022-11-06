import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';

const cx = classNames.bind(styles);

// const orderLists = [
//     {
//         id: 'abc123',
//         userID: '1234' ,
//         state: 'success',
//         time: '12 Oct 2022 12:34:32 GMT+0700',
//         addrInfo: {
//             name: 'Nguyen Van A',
//             phoneNumeber: '01345875773',
//             addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh'
//         }

//     },
// ];

function ManageOrder() {
    return (
        <DefaultLayout>
            <h1 className={cx('heading')}>Danh sách đơn hàng</h1>
        </DefaultLayout>
    );
}

export default ManageOrder;
