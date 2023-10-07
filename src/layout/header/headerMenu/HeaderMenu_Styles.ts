import styled, {css} from "styled-components";
import {theme} from "../../../styles/theme";
import {Link} from "react-scroll";

const StyledMenu = styled.nav`

`

const ListItem = styled.ul`
  display: flex;
  gap: 80px;
  justify-content: center;
`

const Item = styled.li`
 
`

const NavLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;


  background-image: linear-gradient(to right,
  #00BCD4,
  #00BCD4 50%,
  ${theme.colors.font} 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
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

  &:hover, &.active {
    background-position: 0;
    &::before{
      width: 100%;
    }
  }

  //&:hover::before, &.active{
  //  width: 100%;
  //}

`

//Mobile Menu

const MobileMenu = styled.nav`
    
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 160px;
  height: 160px;
  top: -80px;
  right: -80px;
  z-index: 9999999;
  background-color: #0f1624;
  border-bottom-left-radius: 50px;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 30px;
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
  display: none;

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

//Dekstop Menu

const DekstopMenu = styled.nav`
  
`

export const S = {
    StyledMenu,
    ListItem,
    Item,
    NavLink,
    MobileMenu,
    BurgerButton,
    MenuPopup,
    DekstopMenu
}