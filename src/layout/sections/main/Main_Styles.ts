import {theme} from "../../../styles/theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";
import photo from "../../../assets/img/photoo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S as Style} from "../../../components/Button/Button.styles";


const Image = styled.div`
  position: relative;
  z-index: 0;
  border-radius: 50px 0;
  border: 5px solid transparent;

  img {
    width: 330px;
    height: 420px;

    @media screen and (max-width: 576px) {
      width: 310px;
      height: 400px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    border-radius: 50px 0;
    background: ${theme.colors.gradient};
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${photo}) center center/cover no-repeat;
    border-radius: 50px 0;
    z-index: 0;
  }
`

const Main = styled.section`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  
  @media ${theme.media.tablet} {
     ${Style.ButtonStyles} {
       display: block;
       margin: 0 auto;
       margin-top: 20px;
     }

    ${FlexWrapper} {
      justify-content: center; /* Изменено с justify-content: space-around */
    }
    
    ${Image} {
      margin-top: 35px;
    }
  } 
`

const MainDescription = styled.div`
  text-align: left;
  max-width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
  @media ${theme.media.mobile} {
    max-width: none;
  }
`


const SubTitle = styled.h2`
  ${font({fMax: 50, fMin: 26})};
  //font-size: 50px;
  //font-weight: 500;
  span{
    white-space: nowrap;
  }
  @media ${theme.media.mobile} {
    text-align: center;
  }
`

const Title = styled.h1`
  margin: 20px 0;
  
  ${font({weight: 600, fMax: 30, fMin: 20})}
  @media ${theme.media.mobile} {
  text-align: center;
}
  p {
    display: none;
  }
`

const HeaderDescription = styled.p`
  margin-bottom: 20px;
  ${font({fMax: 20, fMin: 18})}
  
  @media ${theme.media.mobile} {
  text-align: center;
}
`

export const  S = {
    Main,
    Image,
    MainDescription,
    SubTitle,
    Title,
    HeaderDescription
}
