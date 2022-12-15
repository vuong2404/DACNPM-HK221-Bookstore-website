import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './Navi.module.scss';

const cx = classNames.bind(styles);
function Navi({ cates = [] }) {
    return (
        <div className={cx('Navi')}>
            <div className={cx('wrap-category')}>
                <div className={cx('category')}>
                    <FontAwesomeIcon icon={faBars} />
                    <p>Category</p>
                </div>
                <div className={cx('listType')}>
                    {cates.map((cate, index) => (
                        <label key={index} className={cx('box')}>
                            <input type="checkbox" />
                            {cate}
                        </label>
                    ))}
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faFilter} />
                        Lọc
                    </button>
                </div>
            </div>

            <div className={cx('itemNavi')}>
                <Link to="/hotDeal">Hot Deal</Link>
            </div>
            <div className={cx('itemNavi')}>
                <Link to="/newBook">Sách mới</Link>
            </div>
            <div className={cx('itemNavi')}>
                <Link to="/bestSeller">Bán chạy</Link>
            </div>
        </div>
    );
}

export default Navi;
