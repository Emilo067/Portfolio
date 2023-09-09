import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <S.MobileMenu role={"navigation"}>

            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
                <Menu/>
            </S.MenuPopup>

        </S.MobileMenu>
    );
};

