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

                <SkillBox>
                    <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <Icon iconID={props.iconID} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Name>{props.name}</Name>
                    </FlexWrapper>
                </SkillBox>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
 flex-grow: 1;
`

const Name = styled.span`
  color: #BDEBEA;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`

const SkillBox = styled.div`
  width: 120px;
  height: 175px;
  margin: 0 auto;
`