import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {Container} from "../../../components/Container";
import {S} from "./Projects_Styles"
import todolistImg from '../../../assets/img/todolist.jpg'
import socialNetwork from '../../../assets/img/social-network.jpg'

const workData = [
    {
        img: `${todolistImg}`,
        title: "Todolist",
        description: "This ToDoList application, built with TypeScript, React, Redux Toolkit, CSS Modules, and Axios, allows users to manage tasks efficiently. Users can add, delete, update, and fetch tasks through an API. The app also supports pagination and user authentication for secure access.",
        link: 'https://emilo067.github.io/todolist/'
    },
    {
        img: `${socialNetwork}`,
        title: "Social Network",
        description: "This Social Network application is developed using TypeScript, React, Redux, and Styled Components. It enables users to interact through posts, comments, and likes, all managed through an API. The app features user authentication and a responsive design for an engaging user experience.",
        link: 'https://emilo067.github.io/samurai-way-main/'
    },
    {
        img: ``,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: ''
    },
    {
        img: ``,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: ''
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-around"} gap={"42px"}>

                    {workData.map((w, index) => {
                        return <Project link={w.link}  img={w.img} title={w.title} key={index}
                                        description={w.description}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

