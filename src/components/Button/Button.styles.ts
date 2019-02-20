import { css } from '@emotion/core'
import { sizes, colours, transitions } from '../../theme'
import { ButtonProps } from './Button';


export const ButtonStyles = ({ type, loading, ...rest }: ButtonProps) => {

    const defaultStyles = css`
        color: ${colours.light.main};
        background-color: ${colours.bondi.main};
        &:hover {
            background-color: ${colours.bondi.light}
        }
        &:disabled {
            color: rgba(${colours.light.main}, 0.2);
        }
    `
    const goStyles = css`
        color: ${colours.light.main};
        background-color: ${colours.jade.main};
        &:hover {
            background-color: ${colours.jade.light}
        }
        &:disabled {
            color: rgba(${colours.light.main}, 0.2);
        }
    `
    const stopStyles = css`
        color: ${colours.light.main};
        background-color: ${colours.tomato.main};
        &:hover {
            background-color: ${colours.tomato.light}
        }
        &:disabled {
            color: rgba(${colours.light.main}, 0.2);
        }
    `

    const loadingStyles = css`
        padding-left: ${sizes.large};
    `

    return css`
        border: 0px;
        border-radius: ${sizes.micro};
        padding: 0px ${sizes.medium};
        height: ${sizes.large};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-family: 'Rubik', sans-serif;
        cursor: pointer;
        transition: all ${transitions.faster};
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08);
        position: relative;
        background-color: ${colours.light.main};
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        color: ${colours.space.main};

        &[disabled] {
            cursor: default;
            pointer-events: none;
            opacity: 0.6;
        }

        &:hover {
            box-shadow: 0 3px 4px 0 rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.08);
            background-color: ${colours.light.light};
        }
        
        ${type === 'primary' && defaultStyles};
        ${type === 'go' && goStyles};
        ${type === 'stop' && stopStyles};
        ${loading && loadingStyles}
    `
}