import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"Center"}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  ${FlexWrapper} {
    gap: 42px;
  }
`