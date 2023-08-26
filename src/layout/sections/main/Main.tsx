import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/img/photoo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Description} from "../../../components/Description";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";
import draw from "../../../assets/img/drawing.png"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"}>
                    <MainDescription>
                        <p>WELCOME TO MY PORTFOLIO</p>
                        <SubTitle>I am Emil Gasanov</SubTitle>
                        <Title>A Front - End Developer (React)</Title>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</Description>
                        <Button>Let’s Begin</Button>
                    </MainDescription>
                    <Image>
                        <img src={draw} alt={"draw"}/>
                    </Image>
                    </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  p{
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  ${Description} {
    margin: 10px 0;
  }
`


const MainDescription = styled.div`
  text-align: left;
  max-width: 50%;
`


const SubTitle = styled.h2`
  font-size: 50px;
  font-weight: 500;
  margin: 10px 0;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

const Image = styled.div`
  position: relative;
  z-index: 0;
  width: 330px;
  height: 420px;
  border-radius: 50px 0;
  border: 5px solid transparent;
  &::before{
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    border-radius: 50px 0;
    background: ${theme.colors.gradient};
    z-index:  -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${photo}) center center/cover no-repeat;
    border-radius: 50px 0;
    z-index: 0;
  }
`
