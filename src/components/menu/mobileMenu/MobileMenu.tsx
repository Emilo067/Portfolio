import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu role={"navigation"}>
            <BurgerButton isOpen = {true}>
                <span></span>
            </BurgerButton>

            <MenuPopup isOpen = {true}>
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
            </MenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`

const MenuPopup = styled.div<{isOpen: boolean}>`

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.90);

  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul{
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }  
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
  font-size: 16px;
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