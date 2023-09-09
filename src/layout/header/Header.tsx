import React from 'react';
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="center" align={"center"}>

                    {width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};