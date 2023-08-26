import styled from "styled-components";
import {theme} from "../styles/theme";

export const Button = styled.button`
  width: 240px;
  height: 60px;
  border-radius: 83px;
  background: ${theme.colors.gradient}, transparent;
  background-size: 100% 100%;
  background-position:right;
  background-repeat: no-repeat;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 60px;
  transition: 1s;

  &:hover {
    background-size: 0 100%;
  }
`