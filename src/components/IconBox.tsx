import React from 'react';
import {Icon} from "./icon/Icon";
import styled from "styled-components";
import {theme} from "../styles/theme";

type IconBoxPropsType = {
    width?: string
    height?: string
    viewBox?: string
}

const icons = [
    {
        iconId: "github"
    },
    {
        iconId: "linkedin"
    },
    {
        iconId: "telegram"
    },
]

export const IconBox: React.FC<IconBoxPropsType> = (props: IconBoxPropsType) => {
    return (
        <StyledIconBox>
            {icons.map((i, index) => {
                return <a href="#">
                    <Icon iconID={i.iconId}  key={index}
                          width={props.width}
                          height={props.height}
                          viewBox={props.viewBox}/>
                </a>
            })}
        </StyledIconBox>
    );
};

const StyledIconBox = styled.div`
  a {
    &:hover {
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