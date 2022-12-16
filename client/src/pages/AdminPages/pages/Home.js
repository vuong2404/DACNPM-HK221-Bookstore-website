import classNames from 'classnames/bind';

import styles from './AdminPage.module.scss';
import DefaultLayout from '../DefaultLayout/index.js';
import SlideShow from '~/components/SlideShow/SlideShow.js';
import Slide from '~/components/Slide/Slide.js';
import Features from '../component/Features/Features.js';

const cx = classNames.bind(styles);
const adminFeatures = [
    {
        name: 'Tính doanh thu',
        description: 'Tính doanh thu theo tuần, theo tháng, theo năm',
        goto: '/admin',
    },
    {
        name: 'Quản lý sách',
        description: 'Thêm, sửa, xóa, cập nhật thông tin sách trên trang web',
        goto: '/manage-book',
    },
    {
        name: 'Quản lý đơn hàng',
        description: 'Xem danh sách đơn hàng, xác nhận đơn hàng,cập nhật trạng thái đơn hàng',
        goto: '/manage-order',
    },
    {
        name: 'Quản lý thành viên',
        description: 'Xem danh sách khách hàng thành viên và thông tin của họ',
        goto: '/member',
    },
    {
        name: 'Trang giao diện khách hàng',
        description: 'Truy cập trang giao diện khách hàng với tư cách là admin',
        goto: '/',
    },
];
function Home() {
    return (
        <DefaultLayout>
            {/* Slide show banner */}
            <SlideShow
                slides={[
                    <Slide image={require('~/assets/images/bg1.jpg')} className={cx('report')}>
                        <h2 className={cx('report-heading')}>Trong tháng 10 vừa qua</h2>
                        <div className={cx('report-info')}>
                            <h3>
                                Đã có tổng cộng <span className={cx('num-order')}>100 </span> đơn hàng, tổng doanh thu
                                là <span className={cx('total-turnover')}>53,905,000 ₫</span>
                            </h3>
                        </div>
                    </Slide>,

                    <Slide image={require('~/assets/images/bg2.png')}>
                        <h2
                            style={{
                                color: 'rgb(255, 0, 166)',
                                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                            }}
                            className='p-4'
                        >
                            Có thêm 123 khách hàng thành viên mới
                        </h2>
                    </Slide>,
                    <Slide image={require('~/assets/images/bg1.jpg')} className={cx('report')}>
                        <h2 className={cx('report-heading')}>Trong tháng 10 vừa qua</h2>
                        <div className={cx('report-info')}>
                            <h3>
                                Đã có tổng cộng <span className={cx('num-order')}>100 </span> đơn hàng, tổng doanh thu
                                là <span className={cx('total-turnover')}>53,905,000 ₫</span>
                            </h3>
                        </div>
                    </Slide>,
                    <Slide image={require('~/assets/images/bg2.png')}>
                        <h2
                            style={{
                                color: 'rgb(255, 0, 166)',
                                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                            }}
                        >
                            Có thêm 123 khách hàng thành viên mới
                        </h2>
                    </Slide>,
                ]}
            />

            {/* list Feature */}
            <Features features={adminFeatures} />
        </DefaultLayout>
    );
}

export default Home;
