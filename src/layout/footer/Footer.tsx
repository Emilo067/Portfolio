import React from 'react';
import styled from "styled-components";
import {IconBox} from "../../components/IconBox";
import {theme} from "../../styles/theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Address>
                        <NumberPhone>
                    <span>
                        Call me: <br/>
                        <a href={`tel:${theme.contacts.phone}`}>+375296170733</a>
                    </span>
                        </NumberPhone>
                        <Email>
                            Email: <br/>
                            <a href={`mailto:${theme.contacts.email}`}>gasanovemil467@gmail.com</a>
                        </Email>
                    </Address>
                    <IconBox width={"35"} height={"30"} viewBox={"0 0 35 30"}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
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