import classNames from 'classnames/bind';
import styles from './Features.module.scss';
import FeatureItem from './FeatureItem';

const cx = classNames.bind(styles);

function Features({ features = [] }) {
    return (
        <div className={cx('container')}>
            <ul className={cx('feature-list')}>
                {features.map((item, index) => {
                    return <FeatureItem key={index} feature={item} />;
                })}
            </ul>
        </div>
    );
}

export default Features;
