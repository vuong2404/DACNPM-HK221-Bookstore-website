import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGES from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faImage,faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from '../pages/AdminPage.module.scss';
import MyButton from '~/components/Button';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import { getBookById, getBookLists, updateBook } from '~/api/bookApi';
import axios from 'axios';







import { Button, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';


import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

import reducer from '../reducer/orderReducer';
import { setPage, gotoFirstPage, gotoLastPage, setNumberLine } from '../reducer/action';
const cx = classNames.bind(styles);

//fetch API
const products = [
    {
        id:1,
        title: "Harry Potter 1",
        author: "J.K.Rowling",
        synopsis: "Ten-year-old Harry Potter is an orphan who lives in the fictional London suburb of Little Whinging, Surrey, with the Dursleys: his uncaring Aunt Petunia, loathsome Uncle Vernon, and spoiled cousin Dudley.",
        tags: ["Huyền ảo","Kịch tính"],
        limited:[],
        time:"2022-20-10 00:00:00",
        amount:10
    },
    {
        id:2,
        title: "Harry Potter 2",
        author: "J.K.Rowling",
        synopsis: "The story follows Harry's tumultuous second year at Hogwarts School of Witchcraft and Wizardry, including an encounter with Voldemort, the wizard who killed Harry's parents.",
        tags: ["Huyền ảo","Kịch tính"],
        limited:[],
        time:"2022-20-10 00:00:00",
        amount:10
    },
    {
        id:3,
        title: "S.A.O Progressive 1",
        author: "Kawahara Reki",
        synopsis: "The volume contains Kirito and Asuna's adventures on the 1st and 2nd floors of Aincrad, including two officially published side stories from Reki's web novel.",
        tags: ["Tiểu thuyết Nhật", "Huyền ảo", "Khoa học viễn tưởng", "Hành động"],
        limited:[],
        time:"2022-20-10 00:00:00",
        amount:10
    },
    {
        id:4,
        title: "S.A.O Progressive 2",
        author: "Kawahara Reki",
        synopsis: "This volume covers the events that took place while clearing the 3rd Floor of Aincrad.",
        tags: ["Tiểu thuyết Nhật", "Huyền ảo", "Khoa học viễn tưởng", "Hành động"],
        limited:[],
        time:"2022-20-10 00:00:00",
        amount:10
    },
    {
        id:5,
        title: "S.A.O Progressive 3",
        author: "Kawahara Reki",
        synopsis: "This volume covers the events that took place while clearing the 4th Floor of Aincrad.",
        tags: ["Tiểu thuyết Nhật", "Huyền ảo", "Khoa học viễn tưởng", "Hành động"],
        limited:[],
        time:"2022-20-10 00:00:00",
        amount:10
    },
];

//function ManageBook() {
//    return(
//        <DefaultLayout>
//            <h1 className={cx('heading')}>Quản lí kho sách</h1>
//            <Create />
//        </DefaultLayout>
//    )
//}



function ManageBookDetail(){        
    const { id } = useParams();

    const [book, setBook] = useState([]) ;
    useEffect(() => {
    return getBookById(id).then((res) => setBook(res));
        }, []);
    const [state, setState] = React.useState({
        title: "",
        author: "",
        bookId:"",
        publisher:"",
        pubYear:"",
        description:"",
        categoryId:"",
        price:"",
        amountInStorage:""
    })


    const handleSubmit = async() => {
    // store the states in the form data
    //book.map((item, index) => (        ));
    if (state.title=='') state.title=book[0].title;
    if (state.author=='') state.author=book[0].author;
    if (state.bookId=='') state.bookId=book[0].bookId;
    if (state.publisher=='') state.publisher=book[0].publisher;
    if (state.pubYear=='') state.pubYear=book[0].pubYear;
    if (state.description=='') state.description=book[0].description;
    if (state.categoryId=='') state.categoryId=book[0].categoryId;
    if (state.price=='') state.price=book[0].price;
    if (state.amountInStorage=='') state.amountInStorage=book[0].amountInStorage;
    //updateBook(id,state);
    axios.put(`http://localhost:8080/api/book/${id}`, state).then((res)=>console.log(res));
    console.log(state);
  }
  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const [image, setImage] = React.useState(null);
  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
    state.urlBook=event.target.files[0].name;
   }
  }

    return(
<DefaultLayout>     
        <div className={cx('manage-book-wrapper')}>
            <div className={cx('header')}>
                <div>
                <MyButton
                    className={cx('unchosen')}
                    to="/manage-book">
                        Hiển thị
                    </MyButton>
                <MyButton
                    className={cx('unchosen')}
                    to="/manage-book/add"
                    >
                        Thêm sách
                    </MyButton>
                </div>
            </div>
<div className={cx('add-view')}>
                {book.map((item,index)=>(
                    <form onSubmit={handleSubmit}>
<div className={cx('add-image')}>

                    <input type="file"  onChange={onImageChange} className="filetype" />
                    <img src={image} alt="preview image" onReset={() => setImage(require(`src/assets/images/${item.urlBook.replace(/\s+/g, '')}`))}  style={{width:'25%',padding:'8px'}}/>
                    <img src={require(`src/assets/images/${item.urlBook.replace(/\s+/g, '')}`)} alt="Book Cover" style={{width:'25%',padding:'8px'}}/>
                </div>
                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tên sách:  </label>
                    <input type="text" name="title" className="form-control" defaultValue={item.title} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tác giả: </label>
                    <input type="text" name="author" className="form-control" defaultValue={item.author} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>bookId: </label>
                    <input type="text" name="bookId" className="form-control" defaultValue={item.bookId} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Nhà xuất bản: </label>
                    <input type="text" name="publisher"  className="form-control" defaultValue={item.publisher} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Năm xuất bản: </label>
                    <input type="text" name="pubYear"  className="form-control" defaultValue={item.pubYear} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('synopsis-field')}>
                <div className="form-group">
                    <label>Sơ lược: </label>
                    <textarea type="text" name="description" className="form-control" rows="5" defaultValue={item.description} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Thể loại: </label>
                    <input type="text"  name="categoryId" className="form-control" defaultValue={item.categoryId} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Giá tiền: </label>
                    <input type="text" name="price" className="form-control" defaultValue={item.price} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Số lượng tồn kho: </label>
                    <input type="text" name="amountInStorage" className="form-control" defaultValue={item.amountInStorage} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('button-field')}>
                    <input type="submit" value="Hoàn tất" className="btn btn-primary btn-lg w-25" />
                    <MyButton
                    className="btn btn-danger btn-lg w-25"
                    to="/manage-book"  
                    >
                        Hủy bỏ
                    </MyButton>
                </div>
                     </form>   

                ))}
        </div>
        </div>
    </DefaultLayout>
)
}

export default ManageBookDetail;
