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

import Create from '../CRUDBook/AddForm';
const cx = classNames.bind(styles);

//fetch API


function ManageBook() {
    return(
        <DefaultLayout>
            <h1 className={cx('heading')}>Quản lí kho sách</h1>
            <Create />
        </DefaultLayout>
    )

}

export default ManageBook;
