import React,{useState} from 'react';
import logo from './logo.svg';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { theme_one, theme_two } from './theme/themes';
import ThemeSelect from './components/ThemeSelect';

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
  background-color: ${props=> props.theme.primary};
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
  const [theme,setTheme]= useState(theme_one)

  const handleThemeChange = (e)=>{
    let theme = e.target.value
    //theme = 'theme_one'

    theme === 'theme_one' ? (theme = theme_one) :(theme = theme_two)

    //theme = {primary:'red',secondary}
    setTheme(theme)
  }

  return (
    <ThemeProvider theme={theme}>
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
          {/* por defecto  */}
          <Button onClick={()=>alert('Hola')}>Press me!!</Button>
          {/* primary */}
          <Button primary>Press me primary!!</Button>
          {/* scondary */}
          <Button secondary>Press me secondary!!</Button>
          {/* danger */}
          <Button danger>Press me danger!!</Button>
          {/* selector de tema */}
          <ThemeSelect handleThemeChange={handleThemeChange}/>
        </AppWrapper>
    </ThemeProvider>

  );
}

export default App;
