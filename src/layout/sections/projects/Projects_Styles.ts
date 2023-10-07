import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {Description} from "../../../components/Description";
import {Button} from "../../../components/Button";
import {font} from "../../../styles/Common";

const Projects = styled.section`
  position: relative;
`

const Project = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 25px 25px 40px;
  border-radius: 50px 0;
  border: 1px solid #A39D9D;
  background: #0F1624;

  ${Description} {
    margin-bottom: 50px;
    
    @media ${theme.media.tablet} {
      text-align: center;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    transition: .6s;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 220px;
  display: block;
  margin: 0 auto;
  border-radius: 24px 8px 8px 8px;
  object-fit: cover;
`

const Title = styled.h3`
  ${font({weight: 600, fMax: 30, fMin: 20})}
  line-height: 88.5%; /* 26.55px */
  text-align: center;
  margin: 40px 0 67px;
  position: relative;
  
  &::before{
    content: "";
    display: inline-block;
    width: 300px;
    height: 4px;
    background-image: ${theme.colors.gradient};
    
    position: absolute;
    bottom: -23px;
    right: 50%;
    transform: translateX(50%);
    
    @media ${theme.media.mobile} {
      width: 150px;
    }
  }
`

export const S = {
    Projects,
    Project,
    ImageWrapper,
    Image,
    Title
}