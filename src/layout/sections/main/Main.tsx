import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import draw from "../../../assets/img/drawing.png";
import {S} from "./Main_Styles";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
                    <S.MainDescription>
                        <S.SubTitle>I am <span>Emil Gasanov</span></S.SubTitle>
                        <S.Title>
                            <p>A Front - End Developer (React)</p>
                            <Typewriter
                                options={{
                                    strings: ['A Front - End Developer (React)'],
                                    autoStart: true,
                                    loop: false,
                                    deleteSpeed: 10000000000000
                                }}
                            />
                        </S.Title>
                        <S.HeaderDescription>I’m a front-end developer who has a results-focused attitude to creating
                            SPA, using
                            React(JS/TS), Redux. I would like to find project work and full-time employment in a company
                            with a modern approach to development and a collaborative team.</S.HeaderDescription>
                        <Button>Contact</Button>
                    </S.MainDescription>
                    <S.Image>
                        <img src={draw} alt={"draw"}/>
                    </S.Image>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

