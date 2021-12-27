// Hardcoded
import igemLogo from './images/igem_logo.svg';
import pictureOfMe from './images/pictureOfMe.jpeg';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.svg';
import reactLogo from './images/react_logo.png';
import jqueryLogo from './images/jquery_logo.png';
import cppLogo from "./images/cpp_logo.png";
import javaLogo from "./images/java_logo.png";
import pythonLogo from "./images/python_logo.png";
import javascriptLogo from "./images/javascript_logo.png";

export const HEADER_WIDTH = 95;
export const DELTA_HEADER = 150;
export const THEME_TOGGLE_SPEED = 0.5;
export const PROJECTS = [
    {
        title: "iGem ULaval 2021",
        description: "Fully responsive website with more than 15 static sub URLS. Built with JQuery, CSS and HTML under 3 weeks.",
        imageURL: igemLogo,
        fillUp: "#253633",
        link: "https://2021.igem.org/Team:ULaval",
        github: "repo"
    },
    {
        title: "",
        description: "",
        imageURL: null,
        fillUp: "#383353",
        link: "",
        github: ""
    },
    {
        title: "",
        description: "",
        imageURL: null,
        fillUp: "#233263",
        link: "",
        github: ""
    }
]

export const ABOUT = 
{
    description: "Hi! I'm a second year software engineering student at Laval University in Quebec, Canada. I'm currently maintaining a 4.03 GPA. I love using technologies such as JavaScript, HTML and CSS to create amazing websites. At the moment, I am looking into relational database models and JavaScript frameworks such as React.js. When I'm not coding, you'll most likely find me playing video games or on the court shooting some hoops.",
    image: pictureOfMe      
}

const WEB = [ 
    {
        name: "CSS",
        level: "80",
        image: cssLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    },
    {
        name: "HTML",
        level: "90",
        image: htmlLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    },
    {
        name: "React",
        level: "75",
        image: reactLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    },
    {
        name: "JQuery",
        level: "60",
        image: jqueryLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    }
];

const PROGRAMMING = [ 
    {
        name: "C++",
        level: "80",
        image: cppLogo,
        imageWidth: "35px",
        imageHeight: "38px",
        color: "",
    },
    {
        name: "Java",
        level: "70",
        image: javaLogo,
        imageWidth: "40px",
        imageHeight: "40px",
        color: "",
    },
    {
        name: "Python",
        level: "70",
        image: pythonLogo,
        imageWidth: "35px",
        imageHeight: "35px",
        color: "",
    },
    {
        name: "Javascript",
        level: "80",
        image: javascriptLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    }
];

const OTHER = [
    {
        name: "SQL",
        level: "72.5",
        image: null,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    },
    {
        name: "Git + Github",
        level: "85",
        image: null,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    },
    {
        name: "VS Code",
        level: "90",
        image: null,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    },
    {
        name: "Netbeans",
        level: "75",
        image: null,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "",
    }
];

export const EXPERIENCES = [
    [WEB, "Web"],
    [PROGRAMMING, "Coding"],
    [OTHER, "Other"],
];