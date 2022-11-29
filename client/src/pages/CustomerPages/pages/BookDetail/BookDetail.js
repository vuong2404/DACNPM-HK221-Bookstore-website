import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from  './BookDetail.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus,faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import { Link } from "react-router-dom";
import Price from '~/components/PriceDisplay/Price';
import Rate from '../../component/Rating/Rating';

let FeedBack=[
    {
        id: 1,
        name: 'Nguyễn Văn A',
        rate: 2,
        review: 'sách quá tuyệt vời'
    },
    {
        id: 2,
        name: 'Nguyễn văn B',
        rate: 3,
        review: 'Sách hay, mọi người nên mua'
    },
    {
        id: 3,
        name: 'Nguyễn Văn C',
        rate: 5,
        review: 'sách đọc gây lú ghê'
    }
];

const cx= classNames.bind(styles);
function BookDetail(){
    return(
        <DefaultLayout>
            <div className={cx('pic-desc')}>
                <div className={cx('picture')}>
                        <img src={images.content1} alt='' className={cx('big-pic')}/>
                    <div className={cx('small-pic')}>
                        <img src={images.content1} alt=''/>
                        <img src={images.content2} alt=''/>
                        <img src={images.content1} alt=''/>
                        <img src={images.content2} alt=''/>
                    </div>
                </div>  

                <div className={cx('description')}>
                    <div className={cx('title-price')}>
                        <p className={cx('book-title')}>Thiên tài bên trái, kẻ điên bên phải</p>
                        <Price className={cx('price')}>180000</Price>
                    </div>

                    <div className={cx('info')}>
                        <div className={cx('mini-info')}>
                            <p>Tác giả: Cao Minh</p>
                            <p>Thể loại: Tiểu thuyết</p>
                            <p>Nhà xuất bản: Nhà xuất bản thế giới</p>
                            <p>Năm xuất bản: 2019</p>
                        </div>
                        <div className={cx('warranty')}>
                            <FontAwesomeIcon icon={faThumbsUp} className={cx('thumbs-up')} />
                            <p>Đổi trả 1 - 1<br />Nếu sách lỗi hoặc hư hại khi vận chuyển</p>
                        </div>
                    </div>

                    <div className={cx('cart-btn')}>
                        <Button className={cx('plus-btn')}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            <p>Thêm vào giỏ</p>
                        </Button>

                        <Button className={cx('buy-btn')}>
                            <Link to='/Cart'>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                                <p>Mua ngay</p>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('introduce')}>
                <h1>Giới thiệu thông tin</h1>
                <p>
                NẾU MỘT NGÀY ANH THẤY TÔI ĐIÊN, THỰC RA CHÍNH LÀ ANH ĐIÊN ĐẤY! <br />

Hỡi những con người đang oằn mình trong cuộc sống, bạn biết gì về thế giới của mình? Là vô vàn thứ lý thuyết được các bậc vĩ nhân kiểm chứng, là luật lệ, là cả nghìn thứ sự thật bọc trong cái lốt hiển nhiên, hay những triết lý cứng nhắc của cuộc đời?

Lại đây, vượt qua thứ nhận thức tẻ nhạt bị đóng kín bằng con mắt trần gian, khai mở toàn bộ suy nghĩ, để dòng máu trong bạn sục sôi trước những điều kỳ vĩ, phá vỡ mọi quy tắc. Thế giới sẽ gọi bạn là kẻ điên, nhưng vậy thì có sao? Ranh giới duy nhất giữa kẻ điên và thiên tài chẳng qua là một sợi chỉ mỏng manh: Thiên tài chứng minh được thế giới của mình, còn kẻ điên chưa kịp làm điều đó. Chọn trở thành một kẻ điên để vẫy vùng giữa nhân gian loạn thế hay khóa hết chúng lại, sống mãi một cuộc đời bình thường khiến bạn cảm thấy hạnh phúc hơn?

Thiên tài bên trái, kẻ điên bên phải là cuốn sách dành cho những người điên rồ, những kẻ gây rối, những người chống đối, những mảnh ghép hình tròn trong những ô vuông không vừa vặn… những người nhìn mọi thứ khác biệt, không quan tâm đến quy tắc. Bạn có thể đồng ý, có thể phản đối, có thể vinh danh hay lăng mạ họ, nhưng điều duy nhất bạn không thể làm là phủ nhận sự tồn tại của họ. Đó là những người luôn tạo ra sự thay đổi trong khi hầu hết con người chỉ sống rập khuôn như một cái máy. Đa số đều nghĩ họ thật điên rồ nhưng nếu nhìn ở góc khác, ta lại thấy họ thiên tài. Bởi chỉ những người đủ điên nghĩ rằng họ có thể thay đổi thế giới mới là những người làm được điều đó.

Chào mừng đến với thế giới của những kẻ điên.
                </p>
            </div>
            <Rate feedbacks={FeedBack}/>
        </DefaultLayout>
    );
}

export default BookDetail;