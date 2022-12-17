import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout';
import styles from './PageSupport.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Page1() {
    return (
        <>
            <DefaultLayout>
                <div style={{ maxWidth: 1200 }} className={cx('parent-viewProfile')}>
                    <div className={cx('item2-viewProfile')}>
                        <h4 className={cx('text2-viewProfile')}>Chính sách đổi/trả hàng</h4>
                        <hr></hr>
                        <img className={cx('image')} src={images.policy} alt="...." />
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>1. Đối với khách mua online</h5>
                            <p className={cx('answer')}>
                                <p>
                                    <FontAwesomeIcon className={cx('icon-mes')} icon={faSnapchat} />
                                    <b>Hướng dẫn các bước đổi/ trả hàng:</b>
                                </p>
                                <p>
                                    - Bước 1: Vui lòng liên hệ hotline 1900 6656 hay gửi email về địa chỉ
                                    icetea@hcmut.edu.vn để thông báo việc yêu cầu đổi/ trả hàng
                                </p>
                                <p>
                                    - Bước 2: Nhân viên chăm sóc khách hàng sẽ liên hệ với bạn để xác nhận; kiểm tra &
                                    tiếp nhận hàng được yêu cầu đổi/ trả hàng (chỉ áp dụng đối với các trường hợp đổi/
                                    trả hàng do lỗi xuất phát từ chúng tôi)
                                    <br />
                                    (Trường hợp đổi hàng theo nhu cầu (màu sắc, kích thước...) bạn vui lòng liên hệ 1900
                                    6656 để được hướng dẫn cụ thể)
                                </p>

                                <p>
                                    - Bước 3: Khi yêu cầu đổi trả được giải quyết, quý khách vui lòng gửi sản phẩm như
                                    hiện trạng khi nhận hàng ban đầu về địa chỉ văn phòng công ty nhà sách Phương Nam
                                    bao gồm sản phẩm và đầy đủ phụ kiện, giấy tờ chứng từ kèm theo (nếu có)
                                </p>
                            </p>
                        </div>
                        <div className={cx('question-answer')}>
                            <h5 className={cx('question')}>2. Đối với khách mua Offline</h5>
                            <p className={cx('answer')}>
                                <p>
                                    <FontAwesomeIcon className={cx('icon-mes')} icon={faSnapchat} />
                                    <b>Đổi trả trong vòng 7 ngày kể từ ngày mua</b>
                                </p>

                                <p> - Chỉ áp dụng đối với sản phẩm bị lỗi kỹ thuật</p>

                                <p>- Sản phẩm đổi/trả phải kèm hóa đơn tính tiền hoặc hóa đơn VAT</p>

                                <p>- Giá trị sản phẩm đổi phải bằng hoặc cao hơn giá trị sản phẩm đã mua</p>
                                <p>
                                    - Sản phẩm phải còn mới, nguyên vẹn, không trầy xước, dơ, nứt, gãy và đầy đủ phụ
                                    kiện bao bì, quà tặng khuyến mãi (nếu có)
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
