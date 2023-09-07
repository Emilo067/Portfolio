import React from 'react';
import styled from "styled-components";
import {Menu} from "../menu/Menu";

export const DesktopMenu: React.FC = () => {
    return (
        <StyledDesktopMenu role={"navigation"}>
            <Menu/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
  
`