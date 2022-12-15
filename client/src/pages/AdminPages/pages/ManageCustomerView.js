import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
import MyButton from '~/components/Button';
import { Button, PageItem, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useReducer } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

import reducer from '../reducer/orderReducer';
import { setPage, gotoFirstPage, gotoLastPage, setNumberLine } from '../reducer/action';
const cx = classNames.bind(styles);

const customer = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        date: "2022-02-10",
        address: "78/5 An Dương Vương, Phường 1, Quận 5, TPHCM",
        email: "A.Nguyen0210@gmail.com",
        phone: "0901000011"
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        date: "2022-02-10",
        address: "78/5 An Dương Vương, Phường 1, Quận 5, TPHCM",
        email: "B.Nguyen0210@gmail.com",
        phone: "0901000011"
    },
    {
        id: 3,
        name: "Nguyễn Văn C",
        date: "2022-02-10",
        address: "78/5 An Dương Vương, Phường 1, Quận 5, TPHCM",
        email: "C.Nguyen0210@gmail.com",
        phone: "0901000011"
    },
    {
        id: 4,
        name: "Nguyễn Văn D",
        date: "2022-02-10",
        address: "78/5 An Dương Vương, Phường 1, Quận 5, TPHCM",
        email: "D.Nguyen0210@gmail.com",
        phone: "0901000011"
    },
    {
        id: 5,
        name: "Nguyễn Văn E",
        date: "2022-02-10",
        address: "78/5 An Dương Vương, Phường 1, Quận 5, TPHCM",
        email: "E.Nguyen0210@gmail.com",
        phone: "0901000011"
    },
];

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function ManageCustomerView() {
    let pages = 10; // = orderList.length ;
    const initState = {
        currentPage: 1,
        numberLine: 10,
        listOrder: customer,
    };
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <DefaultLayout>
            <div className={cx('member-wrapper')}>
                <h1>Danh sách khách hàng</h1>
                <br></br>

                <div className={cx('group')}>
                    <span className={cx('total')}>172 thành viên</span>
                    <MyButton className={cx('filter')} onclick="openForm()" to="./filter">
                        <FontAwesomeIcon icon={faFilter} style={{ color: 'gray', fontSize: '30px' }} />
                    </MyButton>

                    <item className={cx('search')}>
                        <item class="input-group input-group-lg" >
                            <input className={cx('input-text')} type="text" placeholder="Tìm kiếm thành viên" />
                        </item>
                    </item>
                    <MyButton style={{ background: 'rgba(43, 118, 236, 0.9)' }} className={cx('them')} to="./add">
                        Thêm khách hàng
                    </MyButton>
                </div>

                <div >
                    <Table bordered hover className={cx('tableview')}>
                        <thead>
                            <tr>
                                <th className="text-center">Họ và tên</th>
                                <th className="text-center">Ngày đăng ký</th>
                                <th className="text-center">Địa chỉ</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Số điện thoại</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        {customer.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td className="text-center">{item.name}</td>
                                    <td className="text-center">{item.date}</td>
                                    <td className="text-center">{item.address}</td>
                                    <td className="text-center">{item.email}</td>
                                    <td className="text-center">{item.phone}</td>
                                    <td className="text-center">
                                        <MyButton class="btn btn-outline-primary"
                                            to={`details/${item.id}`}
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </MyButton>
                                        <MyButton class="btn btn-outline-danger">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </MyButton>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>

                </div>
                <div className={cx('bottom-pagination')}>
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
            </div >
        </DefaultLayout >
    )
}

export default ManageCustomerView;
