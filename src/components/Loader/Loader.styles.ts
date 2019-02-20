import { css, keyframes } from '@emotion/core'
import { sizes, colours, transitions } from '../../theme'
import { LoaderProps } from './Loader';


export const LoaderStyles = ({ light, size }: LoaderProps) => {

    const scaleOut = keyframes`
        0% { 
            transform: scale(0);
        } 100% {
            transform: scale(1.0);
            opacity: 0;
        }
    `

    return css`
        display: inline-block;
        position: relative;
        width: ${sizes[size]};
        height: ${sizes[size]};

        &:before, &:after {
            content: '';
            display: inline-block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            animation: ${scaleOut} 1.5s infinite ease-out;
            background-color: ${light ? colours.light.main : colours.space.main};
            border-radius: 50%;
        }

        &:after {
            animation-delay: -0.75s;
        }
    `
}