import {theme} from "../../styles/theme";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = styled.footer` 
  //position: relative;
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
    }
    
  }
`

const Address = styled.div`
  display: flex;
  gap: 60px;
  
  @media ${theme.media.tablet} {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    margin-bottom: 20px;
  }
`

const NumberPhone = styled.div`
  line-height: 1.5;
`

const Email = styled.div`
  line-height: 1.5;
`

export const S = {
    Footer,
    Address,
    NumberPhone,
    Email
}