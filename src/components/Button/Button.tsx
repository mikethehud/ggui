import React from 'react'
/** @jsx jsx */ import { jsx } from '@emotion/core'
import { ButtonStyles } from './Button.styles';

export type ButtonType = 'primary' | 'go' | 'stop' | undefined

export interface ButtonProps {
    type: ButtonType
    text: String
}

const Button = (props: ButtonProps) => {
    const { text, type } = props;

    return (
        <button css={ButtonStyles({ type })}>
            {text}
        </button>
    )
}

export default Button