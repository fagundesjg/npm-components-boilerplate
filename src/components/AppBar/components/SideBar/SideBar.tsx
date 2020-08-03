import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Home, VerifiedUser, LocalGasStation } from '@material-ui/icons';

import { withSideBar } from './withSideBar';
import { ISideBar, IMenuItem } from './types';
import { Container } from './styles';
import { useHistory, useLocation } from 'react-router-dom';

const SideBarComponent = (props: ISideBar) => {
  const { opened } = props;
  const history = useHistory();
  const location = useLocation();

  const menuItems: IMenuItem[] = [
    { label: 'Home', path: '/', icon: <Home /> },
    { label: 'Usuários', path: '/users', icon: <VerifiedUser /> },
    { label: 'Frentistas', path: '/attendants', icon: <LocalGasStation /> },
  ];

  function handleMenuClick(menuItem: IMenuItem) {
    history.push(menuItem.path);
  }

  return (
    <Container opened={opened}>
      <ul>
        {menuItems.map((item, key) => (
          <li key={key}>
            {opened ? (
              <Button
                startIcon={item.icon}
                color={
                  location.pathname === item.path ? 'primary' : 'secondary'
                }
                onClick={() => handleMenuClick(item)}
              >
                {item.label}
              </Button>
            ) : (
              <IconButton
                onClick={() => handleMenuClick(item)}
                color={
                  location.pathname === item.path ? 'primary' : 'secondary'
                }
              >
                {item.icon}
              </IconButton>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

const SideBar = withSideBar(SideBarComponent);

export { SideBar };
