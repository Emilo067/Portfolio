import React from 'react';
import {Description} from "../../../../components/Description";
import {Button} from "../../../../components/Button";
import projImg from "../../../../assets/img/proj.png"
import {S} from "../Projects_Styles"

type ProjectPropsType = {
    title: string,
    description: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={projImg} alt={"project"}/>
                <Button>Look It Up</Button>
            </S.ImageWrapper>
            <S.Title>{props.title}</S.Title>
            <Description>
                {props.description}
            </Description>
        </S.Project>
    );
};