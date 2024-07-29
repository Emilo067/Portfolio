import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Field} from "../../../components/form/field/Field";
import emailjs from "@emailjs/browser";
import {Button} from "../../../components/Button/Button";
import {S as Style} from "../../../components/Button/Button.styles";

export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return
        emailjs.sendForm('service_77qjlb9', 'template_i2tv0x7', form.current, 'YeIniWLUJw2o-Ao72')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <StyledContacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>

                <StyledForm ref={form} onSubmit={sendEmail}>
                    <Field required placeholder={"name"} name={'user_name'}/>
                    <Field required type={'email'} placeholder={"email"} name={'email'}/>
                    <Field required placeholder={"subject"} name={'subject'}/>
                    <Field required as={"textarea"} placeholder={"message"} name={'message'}/>
                    <Button type={"submit"}>Submit</Button>
                </StyledForm>

            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section``

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 0 auto;
  max-width: 530px;
  width: 100%;
  ${Style.ButtonStyles} {
    display: block;
    margin: 0 auto;
  }
  
  textarea{
    resize: none;
    height: 165px;
  }
`
