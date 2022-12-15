import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './PageSupport.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnapchatSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Page1() {
    return (
        <>
            <DefaultLayout>
                <div style={{ maxWidth: 1200 }} className={cx('parent-viewProfile')}>
                    <div className={cx('item2-viewProfile')}>
                        <h4 className={cx('text2-viewProfile')}>Quy định viết bình luận</h4>
                        <hr></hr>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('warn')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faSnapchatSquare} />
                                1. Bình luận sẽ không được đăng khi có những thông tin sau
                            </h5>
                            <p className={cx('answer')}>
                                <p>- Các đường liên kết ở bất kì trang web nào khác ngoại trừ website của IceTeaBook</p>
                                <p>
                                    - Những bình luận quá ngắn, ít hơn 50 kí tự - Tiết lộ quá nhiều tình tiết của tác
                                    phẩm ảnh hưởng đến việc thưởng thức của độc giả khác
                                </p>
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('warn')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faSnapchatSquare} />
                                2. Lưu ý
                            </h5>
                            <p className={cx('answer')}>
                                <p>
                                    - Bằng việc gửi bài bình luận của mình, bạn đã đóng góp ý kiến cho Nhà Sách
                                    IceTeaBook và việc này hoàn toàn tự nguyện nên bạn không thể hủy bỏ bình luận của
                                    mình.{' '}
                                </p>

                                <p>
                                    - Nhà Sách IceTeaBook có quyền không đăng tải bình luận, đặc biệt là những bình luận
                                    không tuân thủ theo những yêu cầu được đăng tải của Nhà Sách IceTeaBook. Chúng tôi
                                    cũng giữ quyền xóa bất cứ bài bình luận nào vào bất kì thời điểm nào mà không cần
                                    thông báo trước.{' '}
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Page1;
