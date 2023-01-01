import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
const cx = classNames.bind(styles);
function Input(props) {
    return (
        <input
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            className={cx(classNames(props.className, styles.input))}
            onChange={props.onChange}
        />
    );
}

export default Input;
