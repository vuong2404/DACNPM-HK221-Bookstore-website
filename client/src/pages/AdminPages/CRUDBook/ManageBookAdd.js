import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faImage } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from '../pages/AdminPage.module.scss';
import MyButton from '~/components/Button';
import React from 'react';
import axios from 'axios';
import { getBookById, getBookLists, postBook } from '~/api/bookApi';
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
        bookId:"",
        publisher:"",
        pubYear:"",
        description:"",
        categoryId:"",
        price:"",
        amountInStorage:"",
        urlBook:""
      })
      const handleSubmit = async() => {
        // store the states in the form data
        postBook(state)
        console.log(state);
      }
      const handleChange = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }

      const [image, setImage] = React.useState(null)

      const onImageChange = (event) => {
       if (event.target.files && event.target.files[0]) {
         setImage(URL.createObjectURL(event.target.files[0]));
        state.urlBook=event.target.files[0].webkitRelativePath;
       }
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
                    className={cx('chosen')}
                    to="/manage-book/add"
                    >
                        Thêm sách
                    </MyButton>
                </div>
                
            </div>
            <div className={cx('add-view')}>
            <form onSubmit={handleSubmit}>
                
                <div className={cx('add-image')}>
    <input type="file" onChange={onImageChange} className="filetype" />
    <img src={image} alt="preview image" style={{width:'25%',padding:'8px'}} />
                </div>

                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tên sách:  </label>
                    <input type="text" name="title" className="form-control" defaulValue={state.title} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tác giả: </label>
                    <input type="text" name="author" className="form-control" defaultValue={state.author} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>bookId: </label>
                    <input type="text" name="bookId" className="form-control" defaultValue={state.bookId} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Nhà xuất bản: </label>
                    <input type="text" name="publisher"  className="form-control" defaultValue={state.publisher} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Năm xuất bản: </label>
                    <input type="text" name="pubYear"  className="form-control" defaultValue={state.pubYear} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('synopsis-field')}>
                <div className="form-group">
                    <label>Sơ lược: </label>
                    <textarea type="text" name="description" className="form-control" rows="5" defaultValue={state.description} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Thể loại: </label>
                    <input type="text"  name="categoryId" className="form-control" defaultValue={state.categoryId} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Giá tiền: </label>
                    <input type="text" name="price" className="form-control" defaultValue={state.price} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Số lượng tồn kho: </label>
                    <input type="text" name="amountInStorage" className="form-control" defaultValue={state.amountInStorage} onChange={handleChange}/>
                </div>
                </div>
                <div className={cx('button-field')}>

                    <input type="submit" value="Thêm sách" className="btn btn-primary btn-lg w-25" />
                    
                </div>
            </form>
        </div>
        </div>
    </DefaultLayout>
)
        
    
}

export default ManageBookAdd;
