import {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './views/Splash';

const LightTheme = {
  generalized: "black", 
  pageBackground: "rgba(246, 245, 240, 0.8)",
  headerLink: "black",
  headerBackground: "",
  tagLineColor: 'black',
  burger: "#000",
  projectBackground: "#1E262F",
  projectDescription: "#282c36",
  blue: "#1b71c2",
  lightBlue: "rgba(18, 27, 49, 0.95)",
  grey: "#595959",
  separator: "black",
  description: "black",
  textShadow: "#C9D1DA",
  shadowDimensions: "4px 4px"
}

const DarkTheme = {
  generalized: "white",
  pageBackground: 'rgba(0, 4, 11, 0.97)',
  headerLink: "#E0E3E6",
  headerBackground: "#0E141B",
  tagLineColor: 'lavender',
  burger: "#EEEFF0",
  projectBackground: "white",
  projectDescription: "#000",
  blue: "#1b71c2",
  lightBlue: "#dee6f0",
  grey: "#808080",
  separator: "#E1E1E1",
  description: "#E6E6E6",
  textShadow: "#7B9DBF",
  shadowDimensions: "2px 3px"
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
