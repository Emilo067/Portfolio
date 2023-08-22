import React from 'react';
import styled from "styled-components";
import {IconBox} from "../../components/IconBox";
import {Menu} from "../../components/menu/Menu";

export const Footer = () => {
    return (
        <StyledFooter>
            <Address>
                <NumberPhone>
                    <span>
                        Call me: <br/>
                        123-456-789
                    </span>
                </NumberPhone>
                <Email>
                    Email: <br/>
                    xxx@xyz.com
                </Email>
            </Address>
            <Menu/>
            <IconBox width={"35"} height={"30"} viewBox={"0 0 35 30"}/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  min-height: 20vh;
  background-color: cadetblue;
`

const Address = styled.div`
  display: flex;
  gap: 60px;
`

const NumberPhone = styled.div`

`

const Email = styled.div`

`