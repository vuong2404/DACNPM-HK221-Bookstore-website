import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from '../pages/AdminPage.module.scss';
import MyButton from '~/components/Button';
import React from 'react';
import axios from 'axios';
import { getBookById, getBookLists, postBook, searchBooks } from '~/api/bookApi';
import { json } from 'react-router-dom';
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


function ManageBookAdd(){
    const [state, setState] = React.useState({
        title: "",
        author: "",
        publisher:"",
        categoryId:"",
      })
      const handleSubmit = async() => {
        // store the states in the form data
        axios.get(`http://localhost:8080/api/book/`,state).then((res)=>res.data)
        console.log(state);
      }
      const handleChange = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }


    return (<DefaultLayout>
        <div className={cx('manage-book-wrapper')}>
            <div className={cx('header')}>
                <div>
                <MyButton
                    className={cx('unchosen')}
                    to="/manage-book"
                    >
                        Hiển thị
                    </MyButton>
                <MyButton
                    className={cx('unchosen')}
                    to="/manage-book/add"
                    >
                        Thêm sách
                    </MyButton>
                <MyButton
                    className={cx('chosen')}
                    to="/manage-book/advanced-search"  
                    >
                        Tìm kiếm nâng cao
                    </MyButton>
                </div>
            </div>
            <div className={cx('add-view')}>
            <form onSubmit={handleSubmit}>
                
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Tên sách:  </label>
                    <input type="text" name="title"  className="form-control" defaulValue={state.title} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Tác giả: </label>
                    <input type="text" name="author"  className="form-control" defaulValue={state.author} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Thể loại: </label>
                    <input type="text" name="categoryId"  className="form-control" defaulValue={state.categoryId} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Nhà xuất bản: </label>
                    <input type="text"name="publisher" className="form-control" defaulValue={state.publisher} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('button-field')}>

                    <input type="submit" value="Tìm kiếm" className="btn btn-primary btn-lg w-25" />
                    
                </div>
                <code>{JSON.stringify(state)}</code>
            </form>
        </div>
        </div>
    </DefaultLayout>
)
        
    
}

export default ManageBookAdd;
