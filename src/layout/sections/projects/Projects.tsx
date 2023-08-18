import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"Center"}>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 50vh;
  background-color: rgba(223, 213, 0, 0.6);
`