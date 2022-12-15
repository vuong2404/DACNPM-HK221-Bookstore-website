import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './PageSupport.module.scss';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Page1() {
    return (
        <>
            <DefaultLayout>
                <div style={{ maxWidth: 1200 }} className={cx('parent-viewProfile')}>
                    <div className={cx('item2-viewProfile')}>
                        <h4 className={cx('text2-viewProfile')}>Các câu hỏi thường gặp</h4>
                        <hr></hr>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>
                                1. Tôi có thể đến tận nơi để xem các sản phẩm trước khi mua không ?
                            </h5>
                            <p className={cx('answer')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faRocketchat} />
                                Bạn có thể đến Nhà Sách IceTeaBook để xem sản phẩm và trực tiếp mua hàng. Ngoài ra, bạn
                                cũng có thể mua hàng trực tuyến tại website{' '}
                                <Link style={{ fontWeight: 'bold' }} to="localhost:3000">
                                    localhost:3000
                                </Link>{' '}
                                để được giao hàng tận nơi, hoàn toàn tiện lợi.
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>
                                2. Trường hợp đơn hàng của tôi có sản phẩm đã hết hàng thì sao?
                            </h5>
                            <p className={cx('answer')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faRocketchat} />
                                Đối với trường hợp này, bộ phận Chăm Sóc Khách Hàng sẽ liên hệ với bạn để báo về tình
                                trạng sản phẩm ngay khi có sản phẩm quay trở lại.
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>
                                3. Tôi muốn thêm/bớt sản phẩm, thay đổi địa chỉ giao hàng?
                            </h5>
                            <p className={cx('answer')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faRocketchat} />
                                Khi đã đặt hàng thành công, quý khách có thể truy cập vào tài khoản, phần Quản lý đơn
                                hàng hoặc kiểm tra email để kiểm tra lại thông tin đơn hàng. Trong trường hợp cần chỉnh
                                sửa cho đơn hàng, quý khách có thể liên hệ với bộ phận hỗ trợ khách hàng bằng cách vào
                                trang "Gửi yêu cầu" và cung cấp thông tin chi tiết gồm: <br />_ Mã số đơn hàng _ Tên sản
                                phẩm/địa chỉ mới và thông tin cần chỉnh sửa Chúng tôi sẽ tiếp nhận thông tin và phản hồi
                                qua email quý khách đăng ký khi gửi yêu cầu. Hoặc liên hệ qua Hotline: 1900 6656 để được
                                hỗ trợ trực tiếp và nhanh nhất. <br />
                                <b>
                                    ● Lưu ý: Quý khách hoàn toàn có thể thay đổi địa chỉ giao hàng hay địa chỉ thanh
                                    toán sau khi đã đặt hàng. Tuy nhiên, quý khách phải thông báo cho chúng tôi trước
                                    khi đơn hàng được chuyển tới bộ phận vận chuyển. Để yêu cầu đổi địa chỉ giao
                                    hàng/thanh toán, quý khách có thể gửi yêu cầu trong trang Quản lý đơn hàng hoặc liên
                                    hệ với bộ phận hỗ trợ khách hàng.
                                </b>
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>4. Tôi có thể hủy đơn hàng đã đặt được không?</h5>
                            <p className={cx('answer')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faRocketchat} />
                                Quý khách chỉ có thể hủy đơn hàng khi đơn hàng chưa được gọi xác nhận từ bộ phận chăm
                                sóc khách hàng của Nhà sách IceTeaBook. Nếu không có nhu cầu nhận hàng, quý khách vui
                                lòng tham khảo thêm chính sách đổi & trả hàng của chúng tôi.
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>5. Tôi có thể đặt dịch vụ gói & tặng quà được không?</h5>
                            <p className={cx('answer')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faRocketchat} />
                                Nhà Sách IceTeaBook chúng tôi có cung cấp dịch vụ gói, tặng quà và gửi lời nhắn theo
                                quà. Đối với dịch vụ này, quý khách buộc phải thanh toán hóa đơn mua hàng và phí gói quà
                                trước khi chúng tôi thực hiện dịch vụ. Phí dịch vụ gói quà dao động từ 5.000 - 10.000đ
                                và giấy gói ngẫu nhiên.
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>6. Vì sao đơn hàng của tôi chưa tới?</h5>
                            <p className={cx('answer')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faRocketchat} />
                                Nếu như vì lý do nào đó đơn hàng của quý khách chưa được giao như đúng hẹn, vui lòng
                                kiểm tra trạng thái đơn hàng trong trang Quản lý đơn hàng hoặc liên hệ với bộ phận Hỗ
                                trợ khách hàng của chúng tôi để được hỗ trợ: <br />
                                <b style={{ color: 'red' }}>
                                    [Hotline: 1900 6656, Thứ 2 - Thứ 6: 8h - 16h30; Thứ 7: 8h - 12h, CN nghỉ]
                                </b>
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>7. Tôi muốn góp ý, phàn nàn về dịch vụ thì phải làm sao?</h5>
                            <p className={cx('answer')}>
                                <FontAwesomeIcon className={cx('icon-mes')} icon={faRocketchat} />
                                Chúng tôi luôn chào đón mọi góp ý, phàn nàn của quý khách để dịch vụ của chúng tôi ngày
                                một hoàn thiện hơn. Quý khách có thể gửi mọi góp ý, khiếu nại của mình qua
                                icetea@hcmut.edu.vn, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                            </p>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Page1;
