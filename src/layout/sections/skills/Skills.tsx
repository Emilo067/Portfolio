import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify={"center"} wrap={"wrap"} gap={"40px"}>
                    <Skill iconID={"javascript"} name={"JAVASCRIPT"}/>
                    <Skill iconID={"typescript"} name={"typescript"}/>
                    <Skill iconID={"react"} name={"react js"}/>
                    <Skill iconID={"reactNative"} name={"react native"}/>
                    <Skill iconID={"redux"} name={"Redux"}/>
                    <Skill iconID={"html"} name={"html5"}/>
                    <Skill iconID={"css"} name={"css3"}/>
                    <Skill iconID={"sass"} name={"sass"}/>
                    <Skill iconID={"git"} name={"git"}/>
                    <Skill iconID={"vs"} name={"vs code"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`a
  min-height: 50vh;
  background-color: rgba(223, 81, 25, 0.47);
  ${FlexWrapper} {
    margin: 0 auto; 
    max-width: 870px;
    width: 100%;
    
    @media ${theme.media.tablet} {
      flex-direction: column;
    }
  }
`