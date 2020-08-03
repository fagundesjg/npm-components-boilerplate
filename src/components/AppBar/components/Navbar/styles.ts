import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

const StyledIconButton = styled(IconButton)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const Nav = styled.nav`
  padding: 8px 0;
  background-color: #fff;
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    color: #222;
    text-transform: uppercase;
  }
`;

export { Nav, StyledIconButton };
