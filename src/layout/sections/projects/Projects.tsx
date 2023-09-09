import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {Container} from "../../../components/Container";
import {S} from "./Projects_Styles"

const workData = [
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-around"} gap={"42px"}>

                    {workData.map((w, index) => {
                        return <Project title={w.title} key={index}
                                        description={w.description}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

