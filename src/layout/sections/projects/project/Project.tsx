import React from 'react';
import {Description} from "../../../../components/Description";
import {Button} from "../../../../components/Button";
import styled from "styled-components";
import projImg from "../../../../assets/img/proj.png"
import {theme} from "../../../../styles/theme";

type ProjectPropsType = {
    title?: string
        //descr?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={projImg} alt={"project"}/>
                <Button>Look It Up</Button>
            </ImageWrapper>
            <Title>Project</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
        </StyledProject>
    );
};

const StyledProject = styled.div`
 max-width: 500px;
  width: 100%;
  padding: 25px 25px 40px;
  border-radius: 50px 0px;
  border: 1px solid #A39D9D;
  background: #0F1624;
 
  ${Description} {
    margin-bottom: 50px;
  }
`

const ImageWrapper = styled.div`
 position: relative;

  &:hover{
    &::before {
      content:"";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }
    ${Button}{
      opacity: 1;
    }
  }

  ${Button} {
    transition: .5s;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &::before{
      width: 100%;
      height: 100%;
    }
  }
`

const Image = styled.img`
  width: 450px;
  height: 220px;
  display: block;
  margin: 0 auto;
  border-radius: 24px 8px 8px 8px;
  object-fit: cover;
`

const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  line-height: 88.5%; /* 26.55px */
  text-align: center;
  margin: 40px 0 67px;
  position: relative;
  
  &::before{
    content: "";
    display: inline-block;
    width: 300px;
    height: 4px;
    background-image: ${theme.colors.gradient};
    
    position: absolute;
    bottom: -23px;
    right: 50%;
    transform: translateX(50%);
  }
`