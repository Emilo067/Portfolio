import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Form} from "../../../components/form/Form";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <Form/>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
 min-height: 50vh;
  background-color: rgba(190,48,7,0.85);
`