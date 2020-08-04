import React, { useContext } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Home, VerifiedUser, LocalGasStation } from '@material-ui/icons';

import { withSideBar } from './withSideBar';
import { ISideBar, IMenuItem } from './types';
import { Container } from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBarContext } from 'contexts';

const SideBarComponent = (props: ISideBar) => {
  const { pagePath } = props;
  const { opened } = useContext(AppBarContext);
  const history = useHistory();
  const location = useLocation();

  const menuItems: IMenuItem[] = [
    { label: 'Home', path: '/', icon: <Home /> },
    { label: 'Usuários', path: '/users', icon: <VerifiedUser /> },
    { label: 'Frentistas', path: '/attendants', icon: <LocalGasStation /> },
  ];

  function handleCurrentPage(path: string) {
    return location.pathname === path && pagePath === path
      ? 'primary'
      : 'secondary';
  }

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
                color={handleCurrentPage(item.path)}
                onClick={() => handleMenuClick(item)}
              >
                {item.label}
              </Button>
            ) : (
              <IconButton
                onClick={() => handleMenuClick(item)}
                color={handleCurrentPage(item.path)}
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
