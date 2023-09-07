import React from 'react';
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from "./Header_Styles"

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="center" align={"center"}>
                    <DesktopMenu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};