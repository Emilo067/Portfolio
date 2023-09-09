import React from 'react';
import spriteSVG from '../../assets/img/sprite.svg'

type IconPropsType = {
    iconID: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "49"} height={props.height || "49"} viewBox={props.viewBox || "0 0 49 49"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${spriteSVG}#${props.iconID}`}/>
        </svg>
    );
};