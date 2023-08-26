import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = (props: {iconID:string}) => {
    return (
        <StyledLogo>
            <a href="#" aria-label={"Main logo"}>
                <Icon iconID={props.iconID}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`

`