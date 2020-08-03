import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PageContainer = styled.div`
  padding: 16px;
  flex: 1;
`;

export { Container, Content, PageContainer };
