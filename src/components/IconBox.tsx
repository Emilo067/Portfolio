import React from 'react';
import {FlexWrapper} from "./FlexWrapper";
import {Icon} from "./icon/Icon";
import styled from "styled-components";
import {theme} from "../styles/theme";

type IconBoxPropsType = {
    width?: string
    height?: string
    viewBox?: string
}

export const IconBox = (props: IconBoxPropsType) => {
    return (
        <StyledIconBox>
                <a href="#">
                    <Icon iconID={"github"} width={props.width} height={props.height} viewBox={props.viewBox}/>
                </a>
                <a href="#">
                    <Icon iconID={"linkedin"} width={props.width} height={props.height} viewBox={props.viewBox}/>
                </a>

                <a href="#">
                    <Icon iconID={"telegram"} width={props.width} height={props.height} viewBox={props.viewBox}/>
                </a>
        </StyledIconBox>
    );
};

const StyledIconBox = styled.div`
  a{
    &:hover{
      transform: translateY(-4px);
    }
  }

  display: flex;
  flex-direction: row;
  gap: 25px;
  
  @media ${theme.media.tablet} {
    margin-top: 15px;
  }
`