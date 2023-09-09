import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/theme";

const Skills = styled.section`
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
 flex-grow: 1;
`

const Name = styled.span`
  color: #BDEBEA;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`

const SkillBox = styled.div`
  width: 120px;
  height: 175px;
  margin: 0 auto;
`

export const S = {
    Skills,
    Skill,
    Name,
    SkillBox
}