import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useState } from 'react';
import styles from './SlideShow.module.scss';
import { clear } from '@testing-library/user-event/dist/clear';

const cx = classNames.bind(styles);

function SlideShow({ slides = [] }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    console.log(slides)

    useLayoutEffect(() => {
        let timerID = setInterval(() => {
            setCurrentIndex((prev) => (prev >= slides.length ? 0 : prev + 1));
            console.log("dfasfas")
        }, 1000)
        return clearInterval(timerID) ;
    }, [currentIndex])

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
