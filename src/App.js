import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './Components/common/Header';
import Routes from './Components/Routes';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Wrapper>
            <Routes />
            {/* <Footer /> */}
          </Wrapper>
        </>
      </Router>
    </div>
  );
};
