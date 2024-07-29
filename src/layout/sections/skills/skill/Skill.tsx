import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    iconID: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>

                    <Icon iconID={props.iconID} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>

        </S.Skill>
    );
};

