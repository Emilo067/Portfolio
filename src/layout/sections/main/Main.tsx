import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/img/photoo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Description} from "../../../components/Description";
import {Button} from "../../../components/Button";

export const Main = () => {
    return (
        <StyledMain>
            <MainTitle>
                <SubTitle>My name is Emil Gasanov</SubTitle>
                <Title>Front - End Developer (React)</Title>
            </MainTitle>
        <FlexWrapper justify={"space-around"}>
            <Info>
                <AboutMe>
                    <SubTitle>About Me</SubTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Description>
                    <Button>Let’s Begin</Button>
                </AboutMe>
                <PersonalInfo>
                    <SubTitle>Personal Info</SubTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Description>
                </PersonalInfo>

            </Info>

            <Image src={photo}/>
        </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: rgba(92, 223, 48, 0.67);
`

const Info = styled.div`
  max-width: 670px;
  width: 100%;
  display: flex;
  align-items: center;
  ${Description} {
    width: 334px;
  }
`

const MainTitle = styled.div`
  text-align: center;
`

const Title = styled.h1`

`

const Image = styled.img`
  border-radius: 50px 0;
  width: 380px;
  height: 450px;
  object-fit: cover;
`

const AboutMe = styled.div`
  max-width: 50%;
`

const PersonalInfo = styled.div`
  max-width: 50%;
`

const SubTitle = styled.h2`

`