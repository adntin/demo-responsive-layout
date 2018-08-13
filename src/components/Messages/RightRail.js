import styled, { css } from 'styled-components';

const RightRail = styled.div`
  ${props => props.value ? css`
    flex-basis: ${props => `${props.value}px`};
  ` : css`
    display: none;
  `}
  background-color: blue;
`;

export default RightRail;
