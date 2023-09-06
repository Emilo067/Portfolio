import styled from "styled-components";
import {theme} from "../styles/theme";


export const Description = styled.p<{color?: string}>`
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 500;
`