import styled from "styled-components";
import {theme} from "../../styles/theme";

const Header = styled.header`
  background-color: ${theme.colors.primaryBg};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999;
`

export const S = {
    Header
}