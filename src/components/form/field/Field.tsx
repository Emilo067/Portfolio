import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const Field = styled.input`
  padding: 15px 18px;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 2px solid ${theme.colors.accent};
  background-color: ${theme.colors.secondaryBg};
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
    outline: 1px solid ${theme.colors.accent};
  }
`

export const Label = styled.label`

`