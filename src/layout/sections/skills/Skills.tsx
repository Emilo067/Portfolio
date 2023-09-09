import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"

const skillData = [
    {
        iconID: "javascript",
        name: "javascript",
    },
    {
        iconID: "typescript",
        name: "typescript"
    },
    {
        iconID: "react",
        name: "react js"
    },
    {
        iconID: "reactNative",
        name: "react native"
    },
    {
        iconID: "redux",
        name: "Redux"
    },
    {
        iconID: "html",
        name: "html5"
    },
    {
        iconID: "css",
        name: "css3"
    },
    {
        iconID: "sass",
        name: "sass"
    },
    {
        iconID: "git",
        name: "git"
    },
    {
        iconID: "vs",
        name: "vs code"
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify={"center"} wrap={"wrap"} gap={"40px"}>

                    {skillData.map((s, index) => {
                        return <Skill iconID={s.iconID} key={index}
                                      name={s.name}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};