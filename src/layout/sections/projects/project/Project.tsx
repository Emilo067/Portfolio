import React from 'react';
import {Description} from "../../../../components/Description";
import projImg from "../../../../assets/img/proj.png"
import {S} from "../Projects_Styles"
import {Button} from "../../../../components/Button/Button";

type ProjectPropsType = {
    img: string,
    title: string,
    description: string,
    link: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.img ? props.img : projImg} alt={"project"}/>
                {/*//<LinkButton href={props.link} target="_blank" rel="noopener noreferrer">Look It Up</LinkButton>*/}
                <Button>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">Look It Up</a>
                </Button>
            </S.ImageWrapper>
            <S.Title>{props.title}</S.Title>
            <Description>
                {props.description}
            </Description>
        </S.Project>
    );
};
