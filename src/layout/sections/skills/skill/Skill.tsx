import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    iconID: string
    name: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>

                <S.SkillBox>
                    <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <Icon iconID={props.iconID} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <S.Name>{props.name}</S.Name>
                    </FlexWrapper>
                </S.SkillBox>

        </S.Skill>
    );
};

