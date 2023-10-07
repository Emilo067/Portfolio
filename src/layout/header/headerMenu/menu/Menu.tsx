import React from 'react';
import {S} from "../HeaderMenu_Styles"

export const Menu: React.FC = () => {
    return (
        <S.StyledMenu>
            <S.ListItem>
                <S.Item>
                    <S.NavLink to="skills" smooth={true} activeClass={"active"}  offset={50}>Skills</S.NavLink>
                </S.Item>
                <S.Item>
                    <S.NavLink to="projects" smooth={true} activeClass={"active"}>Projects</S.NavLink>
                </S.Item>
                <S.Item>
                    <S.NavLink to="main" smooth={true} activeClass={"active"}>About me</S.NavLink>
                </S.Item>
                <S.Item>
                    <S.NavLink to="contact" smooth={true} activeClass={"active"}>Contact</S.NavLink>
                </S.Item>
            </S.ListItem>
        </S.StyledMenu>
    );
};

