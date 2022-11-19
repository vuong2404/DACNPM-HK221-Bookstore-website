import classNames from "classnames";
import Slide from "~/components/Slide/Slide";
import SlideShow from "~/components/SlideShow/SlideShow";
import Navi from "../component/Navi/Navi";
import Content from "../component/Content/Content";

import DefaultLayout from "../DefaultLayout";
import styles from "./CustomerPage.module.scss";

const bookInfo= [
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
    {
      name: "Thiên tài bên trái, kẻ điên bên phải",
      price: "138000",
      sell: "389"
    },
  ]

const bookType=['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn','Học đường','Khoa học','Trẻ em','Manga']

const cx= classNames.bind(styles)
function Home() {
    return (
      <>
      <Navi cates={bookType}/>
        <DefaultLayout>
            <SlideShow slides={[
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
                                margin: '80px 0',
                                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                            }}
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
                                margin: '80px 0',
                                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                            }}
                        >
                            Có thêm 123 khách hàng thành viên mới
                        </h2>
                    </Slide>,
            ]}
                    />
                    <Content book={bookInfo}/>
        </DefaultLayout>
        </>
    );
}

export default Home;
