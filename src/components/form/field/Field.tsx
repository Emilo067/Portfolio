import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const Field = styled.input`
  padding: 15px 18px;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 2px solid #4287f5;
  background-color: #333333;
  color: ${theme.colors.font};
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  &::placeholder{
    color: #999999;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: 1px solid #4287f5;
  }
  
`

export const Label = styled.label`

`