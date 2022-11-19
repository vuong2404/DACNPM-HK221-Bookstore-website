import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
import MyButton from '~/components/Button';
import reducer from '../reducer/orderReducer';
import { setPage, gotoFirstPage, gotoLastPage, setNumberLine } from '../reducer/action';
import OrderItem from '../component/OrderItem/OrderItem';
import Status from '~/components/OrderStatus/OrderStatus';

const cx = classNames.bind(styles);

//fetch API
const orderLists = [
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        code: 'CMDJE42J238',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        code: 'CMDJE42J238',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        code: 'CMDJE42J238',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        code: 'CMDJE42J238',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        code: 'CMDJE42J238',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
    {
        id: 'abc123',
        userID: '1234',
        status: 'success',
        time: '12 Oct 2022 12:34:32 GMT+0700',
        addrInfo: {
            name: 'Nguyen Van A',
            phoneNumeber: '01345875773',
            addr: 'Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        },
    },
];

function ManageOrder() {
    let pages = 10; // = orderList.length ;
    const initState = {
        currentPage: 1,
        numberLine: 10,
        listOrder: orderLists,
    };
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <DefaultLayout>
            <h1 className={cx('heading')}>Danh sách đơn hàng</h1>
            <div className={cx('order-filter')}>
                <input className={cx('order-search')} placeholder="Tìm kiếm..........." />
                <div className={cx('order-pagination')}>
                    <Dropdown className={cx('dropdown-custom')}>
                        <DropdownToggle className={cx('title')}>
                            <span>{state.numberLine}</span> dòng
                        </DropdownToggle>
                        <DropdownMenu className={cx('menu')}>
                            {[10, 20, 30, 50].map((item, index) => (
                                <DropdownItem
                                    key={index}
                                    className={cx('menu-item')}
                                    active={state.numberLine === item}
                                    onClick={() => dispatch(setNumberLine(item))}
                                >
                                    <span>{item}</span> dòng
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <MyButton
                        className={cx('pagination-btn')}
                        disabled={state.currentPage === 1}
                        onClick={() => dispatch(gotoFirstPage())}
                    >
                        Trang đầu
                    </MyButton>{' '}
                    <Dropdown className={cx('dropdown-custom')}>
                        <DropdownToggle className={cx('title')}>{state.currentPage}</DropdownToggle>
                        <DropdownMenu className={cx('menu')}>
                            {Array.from(Array(pages).keys()).map((i) => (
                                <DropdownItem
                                    key={i}
                                    className={cx('menu-item')}
                                    active={state.currentPage === i + 1}
                                    onClick={() => dispatch(setPage(i + 1))}
                                >
                                    {i + 1}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <MyButton
                        className={cx('pagination-btn')}
                        disabled={state.currentPage === pages}
                        onClick={() => dispatch(gotoLastPage(pages))}
                    >
                        Trang cuối
                    </MyButton>{' '}
                </div>
            </div>
            <div className={cx('orders-status-filter')}>
                <Status type="waitting" />
                <Status type="confirmed" />
                <Status type="intrans" />
                <Status type="success" />
                <Status type="undelivered" />
                <Status type="cancel" />
            </div>

            <div className={cx('orders-wrapper')}>
                {orderLists.map((item, index) => {
                    return <OrderItem key={index} order={item} />;
                })}
            </div>
        </DefaultLayout>
    );
}

export default ManageOrder;
