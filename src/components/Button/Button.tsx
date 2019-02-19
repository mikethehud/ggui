import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

export type ButtonType = 'default' | 'go' | 'stop'

export interface ButtonProps {
    type?: ButtonType
    text: String
}

const Button = (props: ButtonProps) => {
    const { text } = props;

    return (
        <button className={classNames(styles['button'], styles['default'])}>
            {text}
        </button>
    )
}

export default Button