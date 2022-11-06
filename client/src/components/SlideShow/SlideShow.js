import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow({ slides = [] }) {
    const [currentIndex, setCurrentIndex] = useState(1);

    // const timer = useRef();
    // useLayoutEffect(() => {
    //     timer.current = setTimeout(() => {
    //         if (currentIndex === slides.length) {
    //             setCurrentIndex(1);
    //         } else setCurrentIndex((prev) => prev + 1);
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, [currentIndex]);

    // console.log(timer);

    return (
        <div className={cx('wrapper')}>
            <span
                className={cx('leftIcon')}
                style={{ opacity: currentIndex === 1 ? 0.2 : 1 }}
                onClick={() => {
                    setCurrentIndex((prev) => (prev > 1 ? prev - 1 : 1));
                }}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </span>

            <div className={cx('slider')}>
                {slides.map((slide, index) => (
                    <div key={index} className={cx('slider-item', index + 1 === currentIndex ? 'show' : 'hidden')}>
                        {slide}
                    </div>
                ))}
            </div>

            <div className={cx('ctrl-slider')}>
                {slides.map((item, index) => {
                    return (
                        <span key={index} className={cx('ctrl-icon', currentIndex === index + 1 ? 'active' : '')}>
                            <FontAwesomeIcon icon={faCircle} />
                        </span>
                    );
                })}
            </div>

            <span
                className={cx('rightIcon')}
                style={{ opacity: currentIndex === slides.length ? 0.2 : 1 }}
                onClick={() => {
                    setCurrentIndex((prev) => (prev >= slides.length ? slides.length : prev + 1));
                }}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </span>
        </div>
    );
}

export default SlideShow;
