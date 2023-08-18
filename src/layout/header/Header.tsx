import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {IconBox} from "../../components/IconBox";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-between">
            <Logo iconID={"logo"}/>
            <Menu/>
            <IconBox width={"32"} height={"32"} viewBox={"0 0 32 32"}/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  min-height: 10vh;
  background-color: bisque;
`