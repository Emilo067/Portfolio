import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconID: "javascript",
    },
    {
        iconID: "typescript",
    },
    {
        iconID: "react",
    },
    {
        iconID: "reactNative",
    },
    {
        iconID: "redux",
    },
    {
        iconID: "html",
    },
    {
        iconID: "css",
    },
    {
        iconID: "sass",
    },
    {
        iconID: "git",
    },
    {
        iconID: "vs",
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>Skills</SectionTitle>

                <FlexWrapper justify={"center"} wrap={"wrap"} gap={"40px"}>
                        {skillData.map((s, index) => {
                            return <Skill iconID={s.iconID} key={index}/>
                        })}
                </FlexWrapper>

            </Container>
        </S.Skills>
    );
};