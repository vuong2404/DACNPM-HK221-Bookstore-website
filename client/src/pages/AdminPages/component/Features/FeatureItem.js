import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import MyButton from '~/components/Button';
import styles from './Features.module.scss';

const cx = classNames.bind(styles);

function FeatureItem({ feature }) {
    return (
        <li className={cx('feature-item')}>
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
            <MyButton
                primary
                rounded
                className={cx('button')}
                to={`${feature.goto}`}
                rightIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
            >
                Truy cập
            </MyButton>
        </li>
    );
}

export default FeatureItem;
