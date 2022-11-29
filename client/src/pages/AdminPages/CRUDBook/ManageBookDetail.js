import 'bootstrap/dist/css/bootstrap.min.css';
import bookCover from '~/assets/images/book_cover.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faImage } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '../DefaultLayout';
import classNames from 'classnames/bind';
import styles from '../pages/AdminPage.module.scss';
import MyButton from '~/components/Button';

const cx = classNames.bind(styles);

//fetch API
const products = [
    {
        id:1,
        title: "Harry Potter 2",
        author: "J.K.Rowling",
        synopsis: "The story follows Harry's tumultuous second year at Hogwarts School of Witchcraft and Wizardry, including an encounter with Voldemort, the wizard who killed Harry's parents.",
        tags: ["Huyền ảo","Kịch tính"],
        limited: [],
        amount: 10,
        time:"2022-20-10 00:00:00",
        amount:10
    }
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
                    <img src={bookCover} alt="Harry Potter 2" style={{width:'25%',padding:'8px'}}/>
                    <FontAwesomeIcon icon={faImage} style={{fontSize:'100px',padding:'25px'}} />
                </div>
                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tên sách:  </label>
                    <input type="text" className="form-control" value={products[0].title}/>
                </div>
                </div>
                <div className={cx('field')}>
                <div className="form-group">
                    <label>Tác giả: </label>
                    <input type="text" className="form-control" value={products[0].author}/>
                </div>
                </div>
                <div className={cx('synopsis-field')}>
                <div className="form-group">
                    <label>Sơ lược: </label>
                    <textarea type="text" className="form-control" rows="5" value={products[0].synopsis}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Thể loại: </label>
                    <input type="text" className="form-control" value={products[0].tags}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Giới hạn: </label>
                    <input type="text" className="form-control" value={products[0].limited}/>
                </div>
                </div>
                <div className={cx('full-field')}>
                <div className="form-group">
                    <label>Số lượng tồn kho: </label>
                    <input type="text" className="form-control" value={products[0].amount}/>
                </div>
                </div>
                <div className={cx('button-field')}>
                    <input type="submit" value="Hoàn tất" className="btn btn-primary btn-lg w-25" />
                    <input type="submit" value="Hủy bỏ" className="btn btn-danger btn-lg w-25"/>
                </div>
            </form>
        </div>
        </div>
    </DefaultLayout>
)
        
    
}

export default ManageBookDetail;
