import {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './views/Splash';

const LightTheme = {
  generalized: "black", 
  pageBackground: "rgba(246, 245, 240, 1)",
  headerLink: "black",
  headerBackground: "",
  burger: "#000",
  blue: "#1b71c2",
  lightBlue: "rgba(18, 27, 49, 0.95)",
  grey: "rgba(194, 194, 194, 0.9)",
  separator: "black",
  description: "rgba(18, 27, 49, 0.95)",
  textShadow: "#C9D1DA",
  shadowDimensions: "4px 4px"
}

const DarkTheme = {
  generalized: "white",
  pageBackground: 'rgba(0, 4, 11, 1)',
  headerLink: "#E0E3E6",
  headerBackground: "#0E141B",
  burger: "#EEEFF0",
  blue: "#1b71c2",
  lightBlue: "#dee6f0",
  grey: "rgba(224, 224, 224, 0.3)",
  separator: "#E1E1E1",
  description: "#d2d2d2",
  textShadow: "#7B9DBF",
  shadowDimensions: "2px 3px"
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
