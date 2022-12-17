import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useReducer, useState } from 'react';
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
import { getOrderLists } from '~/api/orderApi';
import axios from 'axios';
import { Alert, Button } from 'react-bootstrap';

const cx = classNames.bind(styles);

//fetch API

function ManageOrder() {
    const [orderLists, setOrderLists] = useState([]);
    const [keySearch, setKeySearch] = useState('');
    const [records, setRecords] = useState([]) ;
    
    const initState = {
        currentPage: 1,
        numberLine: 10,
        listOrder: orderLists,
    }; 
    const [state, dispatch] = useReducer(reducer, initState);

    const loadData = async () => {
        return await getOrderLists().then((res) => setOrderLists(res));
    };
    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => { 
        console.log(state)
        let from = (state.currentPage - 1)*state.numberLine ;
        let to = state.currentPage*state.numberLine 
        if (to > orderLists.length) {
            to = orderLists.length;
        }
        setRecords(orderLists.slice(from,to))
    }, [state, orderLists])

    console.log(keySearch)
    let pages = orderLists.length // = orderList.length ;
    const handleFilterByStatus = async (status) => {
        await axios
            .get(`http://localhost:8080/api/order?status=${status}`)
            .then((res) => res.data)
            .then((data) => setOrderLists(data))
            .catch((err) => alert('Đã xảy ra lỗi!', err));
    };
    const handleSearch = async (key) => {
       await axios
            .get(`http://localhost:8080/api/order?key=${key}`)
            .then((res) => res.data)
            .then((data) => setOrderLists(data))
            .catch((err) => alert('Đã xảy ra lỗi!', err));
        dispatch(gotoFirstPage());
    };
    return (
        <DefaultLayout>
            <h1 className={cx('heading')}>Danh sách đơn hàng</h1>
            <div className={cx('order-filter')}>
                <input
                    className={cx('order-search')}
                    placeholder="Tìm kiếm..........."
                    onChange={(e) => setKeySearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            handleSearch(e.target.value);
                            e.target.value = ''
                        }
                    }}
                />
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
                            {Array.from(Array(Math.floor(pages/state.numberLine)+1).keys()).map((i) => (
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
                        onClick={() => dispatch(gotoLastPage(Math.floor(pages/state.numberLine)+1))}
                    >
                        Trang cuối
                    </MyButton>{' '}
                </div>
            </div>
            <div className={cx('orders-status-filter')}>
                <Button variant="dark me-3" t onClick={() => loadData()}>
                    All
                </Button>
                <Status type="waiting" onClick={() => handleFilterByStatus('waiting')} />
                <Status type="confirmed" onClick={() => handleFilterByStatus('confirmed')} />
                <Status type="intrans" onClick={() => handleFilterByStatus('intrans')} />
                <Status type="success" onClick={() => handleFilterByStatus('success')} />
                <Status type="faild" onClick={() => handleFilterByStatus('faild')} />
                <Status type="cancel" onClick={() => handleFilterByStatus('cancel')} />
            </div>

            <div className={cx('orders-wrapper')}>
                {records.map((item, index) => {
                    return <OrderItem key={index} order={item} />;
                })}
            </div>
        </DefaultLayout>
    );
}

export default ManageOrder;
