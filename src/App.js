import './App.css';
import {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from "styled-components";
import Splash from './components/Splash';

const LightTheme = {
  pageBackground: '#FFFFFF',
  headerLink: "#282c36",
  headerBackground: "#c3dffa",
  tagLineColor: 'black',
  burger: "#000",
  projectBackground: "#e6f2ff"
}

const DarkTheme = {
  pageBackground: '#2F333F',
  headerLink: "#FFFAFA",
  headerBackground: "#282c36",
  tagLineColor: 'lavender',
  burger: "#EEEFF0",
  projectBackground: "#DCDCDC"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
