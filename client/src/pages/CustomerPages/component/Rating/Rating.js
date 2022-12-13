import classNames from "classnames/bind";
import styles from  './Rating.module.scss';
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const cx=classNames.bind(styles);

function Rate({feedbacks=[]}){
    var [cmt,setCmt]=useState(false);
    var [valCmt, setValCmt]=useState('');
    var avgStar=0;
    feedbacks.forEach(element => {
        avgStar+=element.rate
    });
    avgStar/=feedbacks.length;

    function handleSubmit(){
        if(rated===0) alert('Hãy đánh giá số sao')
        else
        {feedbacks.push({id: 99, name:'Nguyễn Văn D',rate: rated, review: valCmt })
        setCmt(false);
        setRated(0);}
    };

    const handleChange = e =>{
        setValCmt(e.target.value);
    };

    var [rated,setRated]=useState(0);
    const handleRated=(rate)=>{
        setRated(rate)
    };

    function Review({value}){
        if(value.id===1){
            return(
                <div className={cx('feedback')}>
                    <img src={images.avatar} alt=''/>
                    <div className={cx('info-review')}>
                        <div className={cx('info')}>
                            <p>{value.name}</p>
                            <div className={cx('mini-stars')}>
                            
                            <Rating initialValue={value.rate} readonly={true} size={18} />
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
                            
                            <Rating initialValue={value.rate} readonly={true} size={18} />
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
                        <p>{avgStar.toPrecision(3)}</p>
                        <div className={cx('stars')}>
                        
                            <Rating initialValue={avgStar} readonly={true} />
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

            {!cmt ? <div className={cx('comment')}>
                <p>Chế độ chỉ dành cho khách đã mua hàng</p>
                <Button className={cx('comment-btn')} onClick={()=>setCmt(true)} >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <p>Viết đánh giá</p>
                </Button>
            </div>:null}

            {cmt ? <div className={cx('feedback-field')}>
            <img src={images.avatar} alt=''/>
                    <div className={cx('info-review')}>
                        <div className={cx('info')}>
                            <p>Nguyễn Văn D</p>
                            <div className={cx('mini-stars')}>
                            
                            <Rating onClick={handleRated} />
                            </div>
                        </div>
                        
                            <textarea rows={8} onChange={handleChange} />
                            <input type="submit" value="Gửi" onClick={handleSubmit} className={cx('submit')} />
                        
                    </div>
            </div>:null}
        </div>
    )
}

export default Rate;