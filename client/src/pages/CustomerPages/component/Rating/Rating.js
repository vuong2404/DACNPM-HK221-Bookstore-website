import classNames from "classnames/bind";
import styles from  './Rating.module.scss';
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Button } from "react-bootstrap";

const cx=classNames.bind(styles);

function Rating({feedbacks=[]}){

    function Review({value}){
        if(value.id===1){
            return(
                <div className={cx('feedback')}>
                    <img src={images.avatar} alt=''/>
                    <div className={cx('info-review')}>
                        <div className={cx('info')}>
                            <p>{value.name}</p>
                            <div className={cx('mini-stars')}>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            </div>
                        </div>
                        <p>{value.review}</p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <>
                <hr/>
                <div className={cx('feedback')}>
                    <img src={images.avatar} alt=''/>
                    <div className={cx('info-review')}>
                        <div className={cx('info')}>
                            <p>{value.name}</p>
                            <div className={cx('mini-stars')}>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('mini-star')}/>
                            </div>
                        </div>
                        <p>{value.review}</p>
                    </div>
                </div>
                </>
            )
        }
    }

    return(
        <div className={cx('rating')}>
            <div className={cx('avg-rating')}>
                <div className={cx('avg')}>
                    <h2>Đánh giá sản phẩm</h2>
                    <div className={cx('numstar')}>
                        <p>4.0</p>
                        <div className={cx('stars')}>
                            <FontAwesomeIcon icon={faStar} className={cx('star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('star')}/>
                            <FontAwesomeIcon icon={faStar} className={cx('star')}/>
                        </div>
                    </div>
                </div>
                
                <div className={cx('filter')}>
                    <Button className={cx('filter-btn')}>Tất cả</Button>
                    <Button className={cx('filter-btn')}>5 sao</Button>
                    <Button className={cx('filter-btn')}>4 sao</Button>
                    <Button className={cx('filter-btn')}>3 sao</Button>
                    <Button className={cx('filter-btn')}>2 sao</Button>
                    <Button className={cx('filter-btn')}>1 sao</Button>
                </div>
            </div>

            <div className={cx('feedbacks')}>
                {feedbacks.map((fback,index)=>{
                    return <Review key={index} value={fback}/>
                })}
            </div>

            <div className={cx('comment')}>
                <p>Chế độ chỉ dành cho khách đã mua hàng</p>
                <Button className={cx('comment-btn')}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <p>Viết đánh giá</p>
                </Button>
            </div>
        </div>
    )
}

export default Rating;