import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
import MyButton from '~/components/Button';
import { Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useReducer, useState } from 'react';
import { getBookLists, deleteBook } from '~/api/bookApi';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

import DefaultLayout from '~/layout/AdminLayout';
import reducer from './PageReducer/orderReducer';
import { setPage, gotoFirstPage, gotoLastPage, setNumberLine } from './PageReducer/action';
const cx = classNames.bind(styles);

function ManageBookView() {
    const [bookLists, setBookLists] = useState([]);
    const [records, setRecords] = useState([]);

    const initState = {
        currentPage: 1,
        numberLine: 10,
        bookOrder: bookLists,
    };

    const [state, dispatch] = useReducer(reducer, initState);

    const loadData = async () => {
        return await getBookLists().then((res) => setBookLists(res));
    };
    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        console.log(state);
        let from = (state.currentPage - 1) * state.numberLine;
        let to = state.currentPage * state.numberLine;
        if (to > bookLists.length) {
            to = bookLists.length;
        }
        setRecords(bookLists.slice(from, to));
    }, [state, bookLists]);

    console.log(records);
    let pages = bookLists.length; // = orderList.length ;

    const [query, setQuery] = useState('');

    return (
        <DefaultLayout>
            <div className={cx('manage-book-wrapper')}>
                <div className={cx('header')}>
                    <div>
                        <MyButton className={cx('chosen')} to="/manage-book">
                            Hiển thị
                        </MyButton>
                        <MyButton className={cx('unchosen')} to="/manage-book/add">
                            Thêm sách
                        </MyButton>
                    </div>
                    <div className={cx('searchbox')}>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text" id="iconClass">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Tên sách/ Tác giả"
                                onChange={(event) => setQuery(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('tableholder')}>
                    <Table bordered hover className={cx('tableview')}>
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Tên sách</th>
                                <th className="text-center">Tác giả</th>
                                <th className="text-center">Nhà xuất bản</th>
                                <th className="text-center">Thể loại</th>
                                <th className="text-center">Giá tiền</th>
                                <th className="text-center">Số lượng tồn kho</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        {records
                            .filter((post) => {
                                if (query === '') {
                                    return post;
                                } else if (
                                    post.title.toLowerCase().includes(query.toLowerCase()) ||
                                    post.author.toLowerCase().includes(query.toLowerCase())
                                ) {
                                    return post;
                                }
                            })
                            .map((item, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td className="text-center">{item.bookId}</td>
                                        <td className="text-center">{item.title}</td>
                                        <td className="text-center">{item.author}</td>
                                        <td className="text-center">{item.publisher}</td>
                                        <td className="text-center">{item.categoryId}</td>
                                        <td className="text-center">{item.price}</td>
                                        <td className="text-center">{item.amountInStorage}</td>
                                        <td className="text-center">
                                            <MyButton class="btn btn-outline-primary" to={`details/${item.bookId}`}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </MyButton>
                                            <MyButton
                                                class="btn btn-outline-danger"
                                                onClick={() => {
                                                    deleteBook(item.bookId);
                                                    window.location.reload(false);
                                                }}
                                            >
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
                            {Array.from(Array(Math.floor(pages / state.numberLine) + 1).keys()).map((i) => (
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
                        onClick={() => dispatch(gotoLastPage(Math.floor(pages / state.numberLine) + 1))}
                    >
                        Trang cuối
                    </MyButton>{' '}
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ManageBookView;
