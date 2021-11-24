import {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './components/Splash';

const LightTheme = {
  pageBackground: '#FFFFFF',
  headerLink: "#282c36",
  headerBackground: "",
  tagLineColor: 'black',
  burger: "#000",
  projectBackground: "#e6f2ff",
  projectDescription: "#282c36"
}

const DarkTheme = {
  pageBackground: '#0E141B',
  headerLink: "#E0E3E6",
  headerBackground: "#0E141B",
  tagLineColor: 'lavender',
  burger: "#EEEFF0",
  projectBackground: "#1E262F",
  projectDescription: "#E0E3E6"
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
