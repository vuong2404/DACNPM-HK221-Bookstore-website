import * as React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button(props) {
    return (
        <button
            id={props.id}
            name={props.name}
            type={props.type}
            className={cx(classNames(props.className, styles.button))}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
