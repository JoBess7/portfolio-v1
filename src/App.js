import './App.css';
import {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './components/Splash';
import { THEME_TOGGLE_SPEED } from './assets/constants';

const LightTheme = {
  pageBackground: '#F0FFF0',
  headerLink: "#282c36",
  headerBackground: "#E0EFE0",
  tagLineColor: 'black',
  burger: "#000"
}

const DarkTheme = {
  pageBackground: '#2F333F',
  headerLink: "#FFFAFA",
  headerBackground: "#282c36",
  tagLineColor: 'lavender',
  burger: "#DCDCDC"
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
