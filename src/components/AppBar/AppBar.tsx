import React from 'react';

import { withAppBar } from './withAppBar';
import { IAppBar } from './types';
import { Container, Content, PageContainer } from './styles';
import { Navbar, SideBar } from './components';

const AppBarComponent = (props: IAppBar) => {
  const { children, pagePath } = props;

  return (
    <Container>
      <SideBar pagePath={pagePath} />
      <Content>
        <Navbar />
        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  );
};

const AppBar = withAppBar(AppBarComponent);

export { AppBar };
