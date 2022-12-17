import classNames from 'classnames/bind';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function Slide({
    height = 300,
    width = 600,
    bgcolor = '#f5f5f5',
    image = '',
    // autoPlay = false,
    // animation = '',
    className,
    children,
}) {

    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: bgcolor,
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `100% 100%`,
            }}
            className={className}
        >
            {children}
        </div>
    );
}

export default Slide;
