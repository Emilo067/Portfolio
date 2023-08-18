import React from 'react';
import styled from "styled-components";
import {Field} from "./field/Field";
import {FlexWrapper} from "../FlexWrapper";
import {Button} from "../Button";

export const Form = () => {
    return (
        <StyledForm>
            <Field placeholder={"name"}/>
            <Field placeholder={"subject"}/>
            <Field as={"textarea"} placeholder={"message"}/>
            <Button type={"submit"}>Submit</Button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 530px;
  width: 100%;
  ${Button} {
    display: block;
    margin: 0 auto;
  }
`