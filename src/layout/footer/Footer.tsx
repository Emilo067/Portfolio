import React from 'react';
import {IconBox} from "../../components/IconBox";
import {theme} from "../../styles/theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.Address>
                        <S.NumberPhone>
                    <span>
                        Call me: <br/>
                        <a href={`tel:${theme.contacts.phone}`}>+375296170733</a>
                    </span>
                        </S.NumberPhone>
                        <S.Email>
                            Email: <br/>
                            <a href={`mailto:${theme.contacts.email}`}>gasanovemil467@gmail.com</a>
                        </S.Email>
                    </S.Address>
                    <IconBox width={"35"} height={"30"} viewBox={"0 0 35 30"}/>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};