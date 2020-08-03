import React from 'react';

import { withAppBar } from './withAppBar';
import { IAppBar } from './types';
import { Container, Content, PageContainer } from './styles';
import { Navbar, SideBar } from './components';

const AppBarComponent = (props: IAppBar) => {
  const { children, opened, toggleOpened } = props;

  return (
    <Container>
      <SideBar opened={opened} />
      <Content>
        <Navbar toggleOpened={toggleOpened} opened={opened} />
        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  );
};

const AppBar = withAppBar(AppBarComponent);

export { AppBar };
