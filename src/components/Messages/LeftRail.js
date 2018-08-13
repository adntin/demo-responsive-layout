import styled, { css } from 'styled-components';

const LeftRail = styled.div`
  ${props => props.value ? css`
    flex-basis: ${props => `${props.value}px`};
  ` : css`
    display: none;
  `}
  background-color: red;
`;

export default LeftRail;
