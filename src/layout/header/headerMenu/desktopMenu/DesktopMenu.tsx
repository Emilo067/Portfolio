import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

export const DesktopMenu: React.FC = () => {
    return (
        <S.DekstopMenu role={"navigation"}>
            <Menu/>
        </S.DekstopMenu>
    );
};