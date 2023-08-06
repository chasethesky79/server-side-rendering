import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header/Header';
import Feed from './Feed';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Question from './Question'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Feed/>} exact/>
              <Route path='/questions/:id' element={<Question/>}/>
            </Routes>
          </BrowserRouter>
        </AppWrapper>
      </>
    );
  }
}

export default App;
