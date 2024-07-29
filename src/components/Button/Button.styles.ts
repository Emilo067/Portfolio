import styled from "styled-components";
import {theme} from "../../styles/theme";
import {font} from "../../styles/Common";

 const ButtonStyles = styled.button`
  position: relative;
  max-width: 240px;
  width: 100%;
  height: 60px;
  border-radius: 83px;
  border: 0.5px solid ${theme.colors.accent};
  background: ${theme.colors.gradient}, transparent;
  background-size: 100% 100%;
  background-position: right;
  background-repeat: no-repeat;
  ${font({weight: 600, fMax: 20, fMin: 15})}
  text-align: center;
  white-space: nowrap;
  //font-size: 20px;
  //font-weight: 600;
  padding: 15px 60px;
  transition: 1s;

  &:hover {
    background-size: 0 100%;
  }
`

 const LinkButton = styled.a`
  position: relative;
  max-width: 240px;
  width: 100%;
  height: 60px;
  border-radius: 83px;
  border: 0.5px solid ${theme.colors.accent};
  background: ${theme.colors.gradient}, transparent;
  background-size: 100% 100%;
  background-position: right;
  background-repeat: no-repeat;
  ${font({weight: 600, fMax: 20, fMin: 15})}
  text-align: center;
  white-space: nowrap;
  //font-size: 20px;
  //font-weight: 600;
  padding: 15px 60px;
  transition: 1s;

  &:hover {
    background-size: 0 100%;
  }
`

export const S = {
 ButtonStyles
}
