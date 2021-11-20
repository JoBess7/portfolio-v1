import './App.css';
import {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './components/Splasher';

const LightTheme = {
  pageBackground: '#DCDCDC',
  titleColor: 'df658b',
  tagLineColor: 'black'
}

const DarkTheme = {
  pageBackground: '#282c36',
  titleColor: 'lightpink',
  tagLineColor: 'lavender'
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
