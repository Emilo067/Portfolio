import React from 'react';
import {Description} from "../../../../components/Description";
import {Button} from "../../../../components/Button";
import styled from "styled-components";
import projImg from "../../../../assets/img/proj.png"

type ProjectPropsType = {
    title?: string
    descr?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={projImg}/>
            <Title>Project</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <Button>Look It Up</Button>
        </StyledProject>
    );
};

const StyledProject = styled.div`
 max-width: 550px;
  width: 100%;
 
`

const Image = styled.img`
  width: 500px;
  height: 280px;
`

const Title = styled.h3`

`