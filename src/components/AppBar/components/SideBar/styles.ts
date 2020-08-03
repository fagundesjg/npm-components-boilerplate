import styled from 'styled-components';

const Container = styled.div<{ opened: boolean }>`
  background-color: white;
  min-width: ${({ opened }) => (opened ? 240 : 75)}px;
  transition: min-width 0.6s linear;
  padding-top: 65px;

  li {
    display: flex;
    justify-content: flex-start;
    button {
      flex: 1;
      border: none;
      padding: 16px 4px;
      text-transform: uppercase;
    }
  }
`;

export { Container };
