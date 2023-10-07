import {theme} from "../../styles/theme";
import styled from "styled-components";

const StyledGoToTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${theme.media.mobile} {
    right: 5px;
    bottom: 5px;
  }
`
export const S = {
    StyledGoToTopBtn
}
