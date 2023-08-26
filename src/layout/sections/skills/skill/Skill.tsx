import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconID: string
    name: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <Icon iconID={props.iconID} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Name>{props.name}</Name>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`

const Name = styled.span`
  color: #BDEBEA;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`