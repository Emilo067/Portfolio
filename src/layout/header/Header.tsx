import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {IconBox} from "../../components/IconBox";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/theme";
import {MobileMenu} from "../../components/menu/mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="center" align={"center"}>
                    <Menu/>
                    {/*<MobileMenu/>*/}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999;
`