import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/theme";
import {Icon} from "../../../components/icon/Icon";

const Skills = styled.section`
  position: relative;
  min-height: 50vh;
  background-color: rgba(223, 81, 25, 0.47);

  ${FlexWrapper} {
    margin: 0 auto;
    max-width: 870px;
    width: 100%;

    @media ${theme.media.tablet} {
      flex-direction: column;
    }
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