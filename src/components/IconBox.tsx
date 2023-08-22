import React from 'react';
import {FlexWrapper} from "./FlexWrapper";
import {Icon} from "./icon/Icon";
import styled from "styled-components";

type IconBoxPropsType = {
    width?: string
    height?: string
    viewBox?: string
}

export const IconBox = (props: IconBoxPropsType) => {
    return (
            <FlexWrapper>
                <a href="#">
                    <Icon iconID={"github"} width={props.width} height={props.height} viewBox={props.viewBox}/>
                </a>
                <a href="#">
                    <Icon iconID={"linkedin"} width={props.width} height={props.height} viewBox={props.viewBox}/>
                </a>

                <a href="#">
                    <Icon iconID={"telegram"} width={props.width} height={props.height} viewBox={props.viewBox}/>
                </a>
            </FlexWrapper>
    );
};