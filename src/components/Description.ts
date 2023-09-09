import styled from "styled-components";
import {theme} from "../styles/theme";
import {font} from "../styles/Common";


export const Description = styled.p<{color?: string}>`
  color: ${theme.colors.font};
  ${font({fMax: 20, fMin: 15})};
`