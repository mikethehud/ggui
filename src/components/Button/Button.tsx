import React from 'react'

export type ButtonType = 'default' | 'positive' | 'negative'

export interface ButtonProps {
    type?: ButtonType
    text: String
}

const Button = (props: ButtonProps) => {
    const { text, type } = props;

    return (
        <button className={ type }>
            {text}
        </button>
    )
}

export default Button