import {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './components/Splash';

const LightTheme = {
  pageBackground: '#FFFFFF',
  headerLink: "#282c36",
  headerBackground: "",
  tagLineColor: 'black',
  burger: "#000",
  projectBackground: "#1E262F",
  projectDescription: "#282c36",
  blue: "#1b71c2",
  lightBlue: "#bbcde5",
  gray: "#dfdfdf"
}

const DarkTheme = {
  pageBackground: 'rgba(0, 4, 11, 0.97)',
  headerLink: "#E0E3E6",
  headerBackground: "#0E141B",
  tagLineColor: 'lavender',
  burger: "#EEEFF0",
  projectBackground: "white",
  projectDescription: "#000",
  blue: "#1b71c2",
  lightBlue: "#dee6f0",
  grey: "#dfdfdf"
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
