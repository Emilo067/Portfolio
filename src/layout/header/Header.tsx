import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {IconBox} from "../../components/IconBox";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <Logo iconID={"logo"}/>
                    <Menu/>
                    <IconBox width={"35"} height={"30"} viewBox={"0 0 35 30"}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  position: fixed;
  z-index: 99999;
  left: 0;
  right: 0;
  top: 0;
`