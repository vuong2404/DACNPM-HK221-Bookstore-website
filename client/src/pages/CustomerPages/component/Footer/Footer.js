import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <p className={cx('footer')}>
            <div className={cx('block')}>
                <div className={cx('title')}>Liên hệ với chúng tôi</div>
                <div>Hotline: 0923236277</div>
                <div>Email: iceTeaBook@gmail.com</div>
                <div>Address: 268, Lý Thường Kiệt, P.14, Q.10, TP.HCM</div>
            </div>
            <div className={cx('block')}>
                <div className={cx('title')}>Hỗ trợ khách hàng</div>
                <Link to="/cau-hoi-thuong-gap" className={cx('support')}>
                    Các câu hỏi thường gặp
                </Link>
                <Link to="/chinh-sach-doi-tra-hang" className={cx('support')}>
                    Chính sách đổi trả hàng
                </Link>
                <Link to="/tieu-chuan-binh-luan" className={cx('support')}>
                    Quy định viết bình luận
                </Link>
            </div>
            <div>
                <div className={cx('title')}>Phương thức thanh toán</div>
                <div className={cx('icon')}>
                    <img className={cx('pic')} src={images.momo} alt="...."></img>
                    <img className={cx('pic')} src={images.zalopay} alt="...."></img>
                    <img className={cx('pic')} src={images.vnpay} alt="...."></img>
                </div>
            </div>
            <div>
                <div className={cx('title')}>Kết nối với chúng tôi</div>
                <div className={cx('icon')}>
                    <Link>
                        <FontAwesomeIcon className={cx('iconItem')} icon={faFacebookSquare} />
                    </Link>
                    <Link>
                        <FontAwesomeIcon className={cx('iconItem')} icon={faInstagramSquare} />
                    </Link>
                    <Link>
                        <FontAwesomeIcon className={cx('iconItem')} icon={faYoutubeSquare} />
                    </Link>
                </div>
            </div>
        </p>
    );
}

export default Footer;
