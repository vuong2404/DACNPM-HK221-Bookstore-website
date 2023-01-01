import classNames from "classnames/bind";
import styles from  './Rating.module.scss';
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { getFeedback } from '~/api/feedbackApi';

const cx=classNames.bind(styles);

function Rate({feedbacks=[]}){
    var [cmt,setCmt]=useState(false);
    var [valCmt, setValCmt]=useState('');
    const [feedback,setFeedback] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let id = searchParams.get('id');
    var avgStar=0;
    feedbacks.forEach(element => {
        avgStar+=element.rateStar
    });
    avgStar/=feedbacks.length;

    async function handleSubmit() {
        if(rated===0) alert('Hãy đánh giá số sao')
        else
        {
        const newfeedback = {bookId: id, userId: 1000001,rateStar: rated, review: valCmt };
        await axios.post('http://localhost:8080/api/feedback',newfeedback).then((response)=>{console.log(response)});
        setCmt(false);
        setRated(0);
        feedbacks.push({fullName: 'username',bookId: id, userId: 1000001,rateStar: rated, review: valCmt })
    }
    };

    useEffect(()=>{
        getFeedback(id).then((data)=>setFeedback(data))
    }, [])

    const handleChange = e =>{
        setValCmt(e.target.value);
    };

    var [rated,setRated]=useState(0);
    const handleRated=(rate)=>{
        setRated(rate)
    };

    const [frate, setFrate] = useState(0);
    var first=true

    function handleFilter(value){
        setFrate(value);
        first=true;
    }
    

    function Review({value}){
        if(frate===0 || value.rateStar===frate){
        if(first){
            first=false;
            return(
                <div className={cx('feedback')}>
                    <img src={images.avatar} alt=''/>
                    <div className={cx('info-review')}>
                        <div className={cx('info')}>
                            <p>{value.fullName}</p>
                            <div className={cx('mini-stars')}>
                            
                            <Rating initialValue={value.rateStar} readonly={true} size={18} />
                            </div>
                        </div>
                        <p>{value.review}</p>
                    </div>
                </div>
            )
        }
        else {
            return(
                <>
                <hr/>
                <div className={cx('feedback')}>
                    <img src={images.avatar} alt=''/>
                    <div className={cx('info-review')}>
                        <div className={cx('info')}>
                            <p>{value.fullName}</p>
                            <div className={cx('mini-stars')}>
                            
                            <Rating initialValue={value.rateStar} readonly={true} size={18} />
                            </div>
                        </div>
                        <p>{value.review}</p>
                    </div>
                </div>
                </>
            )
        }
    }

    }

    return(
        <div className={cx('rating')}>
            <div className={cx('avg-rating')}>
                <div className={cx('avg')}>
                    <h2>Đánh giá sản phẩm</h2>
                    <div className={cx('numstar')}>
                        {avgStar?<p>{avgStar.toPrecision(3)}</p>:<p>0</p>}
                        <div className={cx('stars')}>
                        
                            {avgStar?<Rating initialValue={avgStar} readonly={true} />:<Rating initialValue={0} readonly={true} />}
                        </div>
                    </div>
                </div>
                
                <div className={cx('filter')}>
                    <Button className={cx('filter-btn')} onClick={()=>handleFilter(0)}>Tất cả</Button>
                    <Button className={cx('filter-btn')} onClick={()=>handleFilter(5)}>5 sao</Button>
                    <Button className={cx('filter-btn')} onClick={()=>handleFilter(4)}>4 sao</Button>
                    <Button className={cx('filter-btn')} onClick={()=>handleFilter(3)}>3 sao</Button>
                    <Button className={cx('filter-btn')} onClick={()=>handleFilter(2)}>2 sao</Button>
                    <Button className={cx('filter-btn')} onClick={()=>handleFilter(1)}>1 sao</Button>
                </div>
            </div>

            <div className={cx('feedbacks')}>
                {feedbacks.map((fback,index)=>{
                    return <Review key={index} value={fback}/>
                })}
            </div>

            {!cmt ? <div className={cx('comment')}>
                <Button className={cx('comment-btn')} onClick={()=>setCmt(true)} >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <p>Viết đánh giá</p>
                </Button>
            </div>:null}

            {cmt ? <div className={cx('feedback-field')}>
            <img src={images.avatar} alt=''/>
                    <div className={cx('info-review')}>
                        <div className={cx('info')}>
                            <p>username</p>
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