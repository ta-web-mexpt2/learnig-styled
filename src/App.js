import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { keyframes } from 'styled-components';

const  AppWrapper = styled.div`
 text-align:center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const AppLogo = styled.img`
  animation: ${rotate360} infinite 10s linear;
  height: 80px;
  &:hover{
    animation:${rotate360} infinite 1s linear;
  }
`

const AppHeader = styled.div`
  background-color: pink;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppTitle = styled.h1`
  font-size: 1.3em;
`
const AppIntro = styled.p`
  font-size: large;
`

function App() {
  return (
    <AppWrapper>

      <AppHeader>
        <AppLogo src={logo}  alt="logo" />
        <AppTitle>
          Hello Ironhacker
        </AppTitle>
      </AppHeader>

      <AppIntro>
        Esto es con styled component
      </AppIntro>

    </AppWrapper>
  );
}

export default App;
