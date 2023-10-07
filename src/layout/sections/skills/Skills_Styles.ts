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
 flex-grow: 1;
`

const SkillBox = styled.div`
  width: 120px;
  height: 175px;
  margin: 0 auto;
  position: relative;
  transition: 0.5s ease-out;

  &:hover {
    //transform: rotate(1turn) scale(1.4);
    transform: matrix(0, 1, 1, 0, 0, 0);
  }

`

export const S = {
    Skills,
    Skill,
    SkillBox
}