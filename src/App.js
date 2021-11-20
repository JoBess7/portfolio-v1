import './App.css';
import {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './components/header/Splash';

const LightTheme = {
  pageBackground: '#F0FFF0',
  headerLink: "#F0FFFF",
  tagLineColor: 'black',
  burger: "#00BFFF"
}

const DarkTheme = {
  pageBackground: '#282c36',
  headerLink: "#FFFAFA",
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
