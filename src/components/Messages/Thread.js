import styled, { css } from 'styled-components';

const Thread = styled.div`
  ${props => props.value ? css`
    flex-basis: ${props => `${props.value}px`};
  ` : css`
    display: none;
  `}
  min-width: 400px;
  background-color: green;
`;

export default Thread;
