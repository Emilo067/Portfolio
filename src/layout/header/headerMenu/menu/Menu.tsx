import React from 'react';
import {S} from "../HeaderMenu_Styles"

export const Menu: React.FC = () => {
    return (
        <S.StyledMenu>
            <S.ListItem>
                <S.Item>
                    <S.Link href="#">Skills</S.Link>
                </S.Item>
                <S.Item>
                    <S.Link href="#">Projects</S.Link>
                </S.Item>
                <S.Item>
                    <S.Link href="#">About me</S.Link>
                </S.Item>
                <S.Item>
                    <S.Link href="#">Contact</S.Link>
                </S.Item>
            </S.ListItem>
        </S.StyledMenu>
    );
};

