import React from 'react'
/** @jsx jsx */ import { jsx } from '@emotion/core'
import { ButtonStyles } from './Button.styles';
import Loader from '../Loader/Loader';

export type ButtonType = 'primary' | 'go' | 'stop' | undefined

export interface ButtonProps {
    type: ButtonType
    text: String
    loading?: boolean
}

const Button = (props: ButtonProps) => {
    const { text, loading, type } = props;

    return (
        <button css={ButtonStyles(props)} disabled={loading}>
            {loading && <Loader size="medium" light={type !== undefined} inButton />}
            {text}
        </button>
    )
}

export default Button