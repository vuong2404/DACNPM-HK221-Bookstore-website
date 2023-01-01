import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className='w-100 text-white' style={{backgroundColor: 'rgba(165, 42, 42, 0.9)'}}>
            <div className='container d-flex align-items-start py-4 justify-content-between'>
                <div className='d-flex flex-column'>
                    <div className={cx('title')}>Liên hệ với chúng tôi</div>
                    <p className='my-2'>Hotline: 0923236277</p>
                    <p className='my-2'>Email: iceTeaBook@gmail.com</p>
                    <p className='my-2'>Address: 268, Lý Thường Kiệt, P.14, Q.10, TP.HCM</p>
                </div>
                <div className='d-flex flex-column'>
                    <div className={cx('title')}>Hỗ trợ khách hàng</div>
                    <Link to="/cau-hoi-thuong-gap" className='my-2 text-light'>
                        Các câu hỏi thường gặp
                    </Link>
                    <Link to="/chinh-sach-doi-tra-hang" className='my-2 text-light'>
                        Chính sách đổi trả hàng
                    </Link>
                    <Link to="/tieu-chuan-binh-luan" className='my-2 text-light'>
                        Quy định viết bình luận
                    </Link>
                </div>
                <div className='d-flex flex-column justify-content-start'>
                    <div className='mb-3'>Phương thức thanh toán</div>
                    <div className={cx('icon')}>
                        <img width={35} className='mx-2' src={images.momo} alt="...."></img>
                        <img width={35} className='mx-2' src={images.zalopay} alt="...."></img>
                        <img width={35} className='mx-2' src={images.vnpay} alt="...."></img>
                    </div>
                </div>
                <div>
                    <div className='mb-3'>Kết nối với chúng tôi</div>
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
            </div>
        </div>
    );
}

export default Footer;
