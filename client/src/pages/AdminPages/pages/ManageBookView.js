import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
import MyButton from '~/components/Button';
import { Button, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useReducer } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

import reducer from '../reducer/orderReducer';
import { setPage, gotoFirstPage, gotoLastPage, setNumberLine } from '../reducer/action';
const cx = classNames.bind(styles);

//fetch API


//function ManageBook() {
//    return(
//        <DefaultLayout>
//            <h1 className={cx('heading')}>Quản lí kho sách</h1>
//            <Create />
//        </DefaultLayout>
//    )
//}

const products = [
    {
        id: 1,
        title: "Harry Potter 1",
        author: "J.K.Rowling",
        synopsis: "Ten-year-old Harry Potter is an orphan who lives in the fictional London suburb of Little Whinging, Surrey, with the Dursleys: his uncaring Aunt Petunia, loathsome Uncle Vernon, and spoiled cousin Dudley.",
        tags: ["Huyền ảo", "Kịch tính"],
        time: "2022-20-10 00:00:00",
        amount: 10
    },
    {
        id: 2,
        title: "Harry Potter 2",
        author: "J.K.Rowling",
        synopsis: "The story follows Harry's tumultuous second year at Hogwarts School of Witchcraft and Wizardry, including an encounter with Voldemort, the wizard who killed Harry's parents.",
        tags: ["Huyền ảo", "Kịch tính"],
        time: "2022-20-10 00:00:00",
        amount: 10
    },
    {
        id: 3,
        title: "S.A.O Progressive 1",
        author: "Kawahara Reki",
        synopsis: "The volume contains Kirito and Asuna's adventures on the 1st and 2nd floors of Aincrad, including two officially published side stories from Reki's web novel.",
        tags: ["Tiểu thuyết Nhật", "Huyền ảo", "Khoa học viễn tưởng", "Hành động"],
        time: "2022-20-10 00:00:00",
        amount: 10
    },
    {
        id: 4,
        title: "S.A.O Progressive 2",
        author: "Kawahara Reki",
        synopsis: "This volume covers the events that took place while clearing the 3rd Floor of Aincrad.",
        tags: ["Tiểu thuyết Nhật", "Huyền ảo", "Khoa học viễn tưởng", "Hành động"],
        time: "2022-20-10 00:00:00",
        amount: 10
    },
    {
        id: 5,
        title: "S.A.O Progressive 3",
        author: "Kawahara Reki",
        synopsis: "This volume covers the events that took place while clearing the 4th Floor of Aincrad.",
        tags: ["Tiểu thuyết Nhật", "Huyền ảo", "Khoa học viễn tưởng", "Hành động"],
        time: "2022-20-10 00:00:00",
        amount: 10
    },
];

function ManageBookView() {
    let pages = 10; // = orderList.length ;
    const initState = {
        currentPage: 1,
        numberLine: 10,
        listOrder: products,
    };
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <DefaultLayout>
            <div className={cx('manage-book-wrapper')}>
                <div className={cx('header')}>
                    <div>
                        <MyButton
                            className={cx('chosen')}
                            to="/manage-book">
                            Hiển thị
                        </MyButton>
                        <MyButton
                            className={cx('unchosen')}
                            to="./add"
                        >
                            Thêm sách
                        </MyButton>
                        <MyButton
                            className={cx('unchosen')}
                            to="./advanced-search"
                        >
                            Tìm kiếm nâng cao
                        </MyButton>
                    </div>
                    <div className={cx('searchbox')}>
                        <div class="input-group input-group-lg" >
                            <span class="input-group-text" id="iconClass">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input type="text" class="form-control" placeholder="Tên sách/ Tác giả" />
                        </div>
                    </div>
                </div>
                <div >
                    <Table bordered hover className={cx('tableview')}>
                        <thead>
                            <tr>
                                <th className="text-center">Tên sách</th>
                                <th className="text-center">Tác giả</th>
                                <th className="text-center">Sơ lược</th>
                                <th className="text-center">Thể loại</th>
                                <th className="text-center">Thời điểm nhập sách</th>
                                <th className="text-center">Số lượng tồn kho</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        {products.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td className="text-center">{item.title}</td>
                                    <td className="text-center">{item.author}</td>
                                    <td className="text-center">{item.synopsis}</td>
                                    <td className="text-center">
                                        {
                                            item.tags.map(tagItem => (
                                                <div className={cx('tag')}>
                                                    <span>{tagItem}</span>
                                                </div>))
                                        }
                                    </td>
                                    <td className="text-center">{item.time}</td>
                                    <td className="text-center">{item.amount}</td>
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
            </div>
        </DefaultLayout>
    )
}

export default ManageBookView;
