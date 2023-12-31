import {theme} from "./theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fMin: number
    fMax: number
}

export const font = ({family, weight, color, lineHeight, fMin, fMax}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 500};
    color: ${color || theme.colors.font};
    lineHeight: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${fMax} - ${fMin}) + ${fMin}px);
`