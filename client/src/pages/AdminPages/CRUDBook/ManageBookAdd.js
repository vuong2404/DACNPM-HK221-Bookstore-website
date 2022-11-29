import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faImage } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from '../pages/AdminPage.module.scss';
import MyButton from '~/components/Button';

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
                <MyButton
                    className={cx('unchosen')}
                    to="/manage-book/advanced-search"  
                    >
                        Tìm kiếm nâng cao
                    </MyButton>
                </div>
                <div className={cx('searchbox')}>
                <div class="input-group input-group-lg" >
                            <span class="input-group-text" id="iconClass">
                            <FontAwesomeIcon icon={faSearch} />
                            </span>
                    <input type="text"  class="form-control" placeholder="Tên sách/ Tác giả"  />
                </div>
                </div>
            </div>
            <div className={cx('add-view')}>
            <form>
                
                <div className={cx('add-image')}>
                    <FontAwesomeIcon icon={faImage} style={{fontSize:'100px'}} />
                </div>
                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tên sách:  </label>
                    <input type="text" className="form-control"/>
                </div>
                </div>
                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tác giả: </label>
                    <input type="text" className="form-control"/>
                </div>
                </div>
                <div className={cx('synopsis-field')}>
                <div className="form-group">
                    <label>Sơ lược: </label>
                    <textarea type="text" className="form-control" rows="5"/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Thể loại: </label>
                    <input type="text" className="form-control"/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Giới hạn: </label>
                    <input type="text" className="form-control"/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Số lượng tồn kho: </label>
                    <input type="text" className="form-control"/>
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
