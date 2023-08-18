import styled from "styled-components";



export const Description = styled.p<{color?: string}>`
  color: ${props => props.color || "#000"};
`