import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/img/photoo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";
import draw from "../../../assets/img/drawing.png"
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
                    <MainDescription>
                        <SubTitle>I am <span>Emil Gasanov</span></SubTitle>
                        <Title>A Front - End Developer (React)</Title>
                        <HeaderDescription>I’m a front-end developer who has a results-focused attitude to creating SPA, using
                            React(JS/TS), Redux. I would like to find project work and full-time employment in a company
                            with a modern approach to development and a collaborative team.</HeaderDescription>
                        <Button>Contact</Button>
                    </MainDescription>
                    <Image>
                        <img src={draw} alt={"draw"}/>
                    </Image>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const Image = styled.div`
  position: relative;
  z-index: 0;
  border-radius: 50px 0;
  border: 5px solid transparent;

  img {
    width: 330px;
    height: 420px;

    @media screen and (max-width: 576px) {
      width: 310px;
      height: 400px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    border-radius: 50px 0;
    background: ${theme.colors.gradient};
    z-index: -1;
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

const StyledMain = styled.section`
  min-height: 100vh;
  
  @media ${theme.media.tablet} {
    ${Button} {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
    }

    ${FlexWrapper} {
      justify-content: center; /* Изменено с justify-content: space-around */
    }
    
    ${Image} {
      margin-top: 35px;
    }
  } 
`


const MainDescription = styled.div`
  text-align: left;
  max-width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`


const SubTitle = styled.h2`
  ${font({fMax: 50, fMin: 26})};
  //font-size: 50px;
  //font-weight: 500;
  margin: 10px 0;
  span{
    white-space: nowrap;
  }
  @media ${theme.media.mobile} {
    text-align: center;
  }
`

const Title = styled.h1`
  ${font({weight: 600, fMax: 30, fMin: 20})}
  @media ${theme.media.mobile} {
  text-align: center;
}
`

const HeaderDescription = styled.p`
  margin: 10px 0;
  ${font({fMax: 20, fMin: 18})}
  
  @media ${theme.media.mobile} {
  text-align: center;
}
`

