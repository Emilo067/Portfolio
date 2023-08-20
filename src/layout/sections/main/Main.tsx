import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/img/photoo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Description} from "../../../components/Description";
import {Button} from "../../../components/Button";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <MainDescription>
                    <p>WELCOME TO MY PORTFOLIO</p>
                    <SubTitle>My name is Emil Gasanov</SubTitle>
                    <Title>Front - End Developer (React)</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</Description>
                    <Button>Let’s Begin</Button>
                </MainDescription>
                <Image src={photo}/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: rgba(92, 223, 48, 0.67);
`


const MainDescription = styled.div`
  text-align: left;
  max-width: 50%;
`

const Title = styled.h1`

`

const Image = styled.img`
  border-radius: 50px 0;
  width: 380px;
  height: 450px;
  object-fit: cover;
`

const SubTitle = styled.h2`

`