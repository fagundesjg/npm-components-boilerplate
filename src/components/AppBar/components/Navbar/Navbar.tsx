import React, { useContext } from 'react';
import { Menu, ChevronLeft } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { IconButton, Button } from '@material-ui/core';

import { withNavbar } from './withNavbar';
import { INavbar } from './types';
import { Nav } from './styles';
import { AppBarContext } from 'contexts';

const NavbarComponent = (props: INavbar) => {
  const {} = props;
  const { opened, toggleOpened } = useContext(AppBarContext);
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
