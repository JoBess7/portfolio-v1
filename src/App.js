import {useState, useEffect} from 'react';
import {ThemeProvider} from "styled-components";
import Splash from './views/Splash';
import { IMAGES } from './assets/constants';
import SimpleLoader from './components/SimpleLoader';

const LightTheme = {
  generalized: "black",
  pageBackground: "rgba(250, 245, 240, 1)",
  headerLink: "black",
  headerBackground: "rgba(250, 245, 240, 1)",
  headerShadow: "0px 1px 1px #C6C6C6",
  burger: "#000",
  blue: "#1b71c2",
  title: "#162521",
  grey: "#B7B7B7",
  separator: "black",
  description: "#162521",
  textShadow: "#C9D1DA",
  shadowDimensions: "4px 4px",
  buttonShadow: "rgba(0, 0, 0, 0.3)",
  buttonText: "#d2d2d2",
  buttonHover: "#BCE2FF",
}

const DarkTheme = {
  generalized: "white",
  pageBackground: '#0a192f',
  headerLink: "#E0E3E6",
  headerBackground: '#0d1f34',
  headerShadow: "0px 1px 50px #081728",
  burger: "#EEEFF0",
  blue: "#1b71c2",
  title: "#c1cceb",
  grey: "rgba(224, 224, 224, 0.3)",
  separator: "#E1E1E1",
  description: "#8791af",
  textShadow: "#7B9DBF",
  shadowDimensions: "2px 3px",
  buttonShadow: "rgba(255, 255, 255, 0.25)",
  buttonText: "rgba(18, 27, 49, 0.95)",
  buttonHover: "#1b71c2",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {

  const [pageDisplay, setPageDisplay] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-scroll');
  }, []);

  const [timerDone, setTimerDone] = useState(false);
  const [loadingClass, setLoadingClass] = useState(" opacity1");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTimeout(() => {
        setTimerDone(true);
    }, 1000);

    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;

        loadImg.onload = () =>
        {
            resolve(image);
        }
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => {
        if(timerDone) {
          setPageDisplay(true);
          setLoadingClass(" to-no-display");
          document.body.classList.remove('no-scroll');
        }
      })
      .catch(err => console.log("Failed to load images", err))
  }, [timerDone])

  return (
    <ThemeProvider theme={themes[theme]}>
        <div className={"loader" + loadingClass}>
          <div className='loader-flex2'>
            <SimpleLoader/>
          </div>
        </div>
        <Splash pageDisplay={pageDisplay} theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
