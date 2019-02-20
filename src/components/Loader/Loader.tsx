import React from 'react'
/** @jsx jsx */ import { jsx } from '@emotion/core'
import { LoaderStyles } from './Loader.styles';

export interface LoaderProps {
    light?: Boolean
    inButton?: Boolean
    size: 'medium' | 'large' | 'xlarge' | 'huge' | 'massive' | 'immense'
}

const Loader = (props: LoaderProps) => {
    return (
        <span css={LoaderStyles(props)} />
    )
}

export default Loader