import { css } from '@emotion/core'
import { sizes, colours, transitions } from '../../theme'
import { ButtonType } from './Button';


export const ButtonStyles = ({ type }: { type: ButtonType }) => {

    const defaultStyles = css`
        color: ${colours.light.main};
        background-color: ${colours.bondi.main};
        &:hover {
            background-color: ${colours.bondi.light}
        }
    `
    const goStyles = css`
        color: ${colours.light.main};
        background-color: ${colours.jade.main};
        &:hover {
            background-color: ${colours.jade.light}
        }
    `
    const stopStyles = css`
        color: ${colours.light.main};
        background-color: ${colours.tomato.main};
        &:hover {
            background-color: ${colours.tomato.light}
        }
    `

    return css`
        border: 0px;
        border-radius: ${sizes.tiny};
        padding: ${sizes.medium} ${sizes.large};
        font-family: 'Rubik', sans-serif;
        cursor: pointer;
        transition: all ${transitions.faster};
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08);
        position: relative;
        color: ${colours.space.dark};
        background-color: ${colours.light.main};
        font-weight: 500;
        -webkit-font-smoothing: antialiased;

        &:hover {
            box-shadow: 0 3px 4px 0 rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.08);
            background-color: ${colours.light.light};
        }
        
        ${type === 'primary' && defaultStyles};
        ${type === 'go' && goStyles};
        ${type === 'stop' && stopStyles};
    `
}