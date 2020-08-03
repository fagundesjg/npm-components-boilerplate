import React from 'react';
import { Menu, ChevronLeft } from '@material-ui/icons';

import { withNavbar } from './withNavbar';
import { INavbar } from './types';
import { Nav } from './styles';
import { IconButton, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const NavbarComponent = (props: INavbar) => {
  const { toggleOpened, opened } = props;
  const history = useHistory();

  return (
    <Nav>
      <IconButton onClick={toggleOpened}>
        {opened ? <ChevronLeft /> : <Menu />}
      </IconButton>
      <Button color="secondary" onClick={() => history.push('/')}>
        CLUBPETRO
      </Button>
    </Nav>
  );
};

const Navbar = withNavbar(NavbarComponent);

export { Navbar };
