import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Form} from "../../../components/form/Form";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <Form/>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  
`