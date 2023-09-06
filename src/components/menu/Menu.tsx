import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Menu = () => {
    return (
        <StyledMenu role={"navigation"}>
            <ListItem>
                <Item>
                    <Link href="#">Skills</Link>
                </Item>
                <Item>
                    <Link href="#">Projects</Link>
                </Item>
                <Item>
                    <Link href="#">About me</Link>
                </Item>
                <Item>
                    <Link href="#">Contact</Link>
                </Item>
            </ListItem>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  
`

const ListItem = styled.ul`
  display: flex;
  gap: 80px;
 justify-content: center;
  
  @media ${theme.media.tablet} {
    display: none;
  }
`

const Item = styled.li`
 
`

const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  //transition: color 0.3s ease;
  //
  //&:hover {
  //  color: #ff0000; // Замените на желаемый цвет при наведении
  //}
    background-image: linear-gradient(
            to right,
            #00BCD4,
            #00BCD4 50%,
            ${theme.colors.font} 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;

  &:before{
    content: '';
    background: #00BCD4;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before{
    width: 100%;
  }

`