import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './UserOption.module.scss';

const cx = classNames.bind(styles);



function UserOpt({ option = [] }) {
    return (
        <div className={cx('wrapper')}>
            {option.map((opt, index) => (
                <Link to={opt.to} key={index}>
                    <p className={cx('item')}>{opt.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default UserOpt;
