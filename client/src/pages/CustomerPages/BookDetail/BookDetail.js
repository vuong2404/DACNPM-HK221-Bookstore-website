import classNames from 'classnames/bind';
import DefaultLayout from '../../../layout/CustomerLayout';
import styles from  './BookDetail.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus,faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import { Link } from "react-router-dom";
import Price from '~/components/PriceDisplay/Price';
import Rate from '~/components/Customer/Rating/Rating';
import { useSearchParams } from 'react-router-dom';
import { getBookById } from '~/api/bookApi';
import { useState,useEffect } from 'react';
import { getBelongById } from '~/api/belongApi';
import { getFeedback } from '~/api/feedbackApi';

const cx= classNames.bind(styles);
function BookDetail(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [book, setBook] = useState(null);
    const [category, setCategory] = useState(null);
    const [feedback,setFeedback] = useState(null)
    let id = searchParams.get('id');
    useEffect(() => {
        getBookById(id).then((data) => setBook(data));
    }, []);
    useEffect(() => {
        getBelongById(id).then((data) => setCategory(data));
    }, []);
    useEffect(()=>{
        getFeedback(id).then((data)=>setFeedback(data))
    }, [])

    function getCate(item,index){
        if (index===0) return item.name;
        return ', '+item.name;
    }

    return(
        <DefaultLayout>
            {book && category && (
                <>
            <div className={cx('pic-desc')}>
                <div className={cx('picture')}>
                        <img src={book[0].urlBook} alt='' className={cx('big-pic')}/>
                    
                </div>  

                <div className={cx('description')}>
                    <div className={cx('title-price')}>
                        <p className={cx('book-title')}>{book[0].title}</p>
                        <Price className={cx('price')}>{book[0].price}</Price>
                    </div>

                    <div className={cx('info')}>
                        <div className={cx('mini-info')}>
                            <p>T??c gi???: {book[0].author}</p>
                            <p>Th??? lo???i: {category.map(getCate)}</p>
                            <p>Nh?? xu???t b???n: {book[0].publisher}</p>
                            <p>N??m xu???t b???n: {book[0].pubYear}</p>
                        </div>
                        <div className={cx('warranty')}>
                            <FontAwesomeIcon icon={faThumbsUp} className={cx('thumbs-up')} />
                            <p>?????i tr??? 1 - 1<br />N???u s??ch l???i ho???c h?? h???i khi v???n chuy???n</p>
                        </div>
                    </div>

                    <div className={cx('cart-btn')}>
                        <Button className={cx('plus-btn')}>
                            <FontAwesomeIcon icon={faCartPlus} className={cx('logo-btn')} />
                            <p>Th??m v??o gi???</p>
                        </Button>

                        <Button className={cx('buy-btn')}>
                            <Link to='/Cart'>
                                <FontAwesomeIcon icon={faCartArrowDown} className={cx('logo-btn')} />
                                <p>Mua ngay</p>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('introduce')}>
                <h1>Gi???i thi???u th??ng tin</h1>
                <p>
                {book[0].description}
                </p>
            </div>
            
            <Rate feedbacks={feedback} />
            </>
            )}
        </DefaultLayout>
    );
}

export default BookDetail;