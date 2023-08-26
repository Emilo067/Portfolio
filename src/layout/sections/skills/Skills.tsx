import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <Skill iconID={"javascript"} name={"JAVACRIPT"}/>
                    <Skill iconID={"typescript"} name={"typescript"}/>
                    <Skill iconID={"react"} name={"react js"}/>
                    <Skill iconID={"reactNative"} name={"react nactive"}/>
                    <Skill iconID={"redux"} name={"Redux"}/>
                    <Skill iconID={"sc"} name={"Styled Components"}/>
                    <Skill iconID={"html"} name={"html5"}/>
                    <Skill iconID={"css"} name={"css3"}/>
                    <Skill iconID={"sass"} name={"sass"}/>
                    <Skill iconID={"git"} name={"git"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 50vh;
  background-color: rgba(223, 81, 25, 0.47);
  ${FlexWrapper} {
    margin: 0 auto; 
    max-width: 870px;
    width: 100%;
    gap: 35px;
  }
`