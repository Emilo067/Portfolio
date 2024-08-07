import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Skills = styled.section`
  position: relative;
  min-height: 50vh;
  background-color: rgba(223, 81, 25, 0.47);

  ${FlexWrapper} {
    margin: 0 auto;
    max-width: 870px;
    width: 100%;
  }
`

const Skill = styled.div`
  width: 120px;
  height: 175px;
  display: flex; 
  justify-content: center;
  align-items: center;

`

const SkillBox = styled.div`

  margin: 0 auto;
  position: relative;
`

export const S = {
    Skills,
    Skill,
    SkillBox
}
