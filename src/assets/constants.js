// Hardcoded
import igemLogo from './images/igem_logo.png';
import pictureOfMe from './images/pictureOfMe.jpeg';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.svg';
import reactLogo from './images/react_logo.png';
import jqueryLogo from './images/jquery_logo.png';
import cppLogo from "./images/cpp_logo.png";
import javaLogo from "./images/java_logo.png";
import pythonLogo from "./images/python_logo.png";
import javascriptLogo from "./images/javascript_logo.png";
import SQLLogo from "./images/database_logo.png";
import gitLogo from "./images/git_logo.png";
import VSCodeLogo from "./images/vscode_logo.png";
import netbeansLogo from "./images/netbeans_logo.png";
import mustache from "./images/mustache.png";
import construction from "./images/under_construction.png";

export const IMAGES = [
    igemLogo,
    pictureOfMe,
    cssLogo,
    htmlLogo,
    reactLogo,
    jqueryLogo,
    cppLogo,
    javaLogo,
    pythonLogo,
    javascriptLogo,
    SQLLogo,
    gitLogo,
    VSCodeLogo,
    netbeansLogo,
    mustache,
    construction
]

export const HEADER_WIDTH = 95;
export const DELTA_HEADER = 150;
export const THEME_TOGGLE_SPEED = 0.5;
export const PROJECTS = [
    {
        title: "iGem ULaval 2021",
        description: "Fully responsive website with more than 15 static sub URLS, built in 3 weeks in the context of iGEM, a worldwide synthetic biology competition gathering more than 7000 students every year",
        imageURL: igemLogo,
        link: "https://2021.igem.org/Team:ULaval",
        github: "repo",
        featured: ["HTML", "CSS", "JQuery"],
        imagePath: "igem_logo.png"
    },
    {
        title: "",
        description: "Coming soon...",
        imageURL: null,
        link: "",
        github: "",
        featured: [],
        imagePath: "../assets/images/igem_logo.png"
    },
    {
        title: "",
        description: "Coming soon...",
        imageURL: null,
        link: "",
        github: "",
        featured: [],
        imagePath: "../assets/images/igem_logo.png"
    },
]

export const ABOUT = 
{
    description: "Hi! I'm a second year software engineering student at Laval University in Quebec, Canada. I'm currently maintaining a 4.03 GPA. I love using technologies such as JavaScript, HTML and CSS to create amazing websites. At the moment, I am looking into relational database models and JavaScript frameworks such as React.js. Currently, I have the privilege of working at Alcoa as a system analyst. When I'm not coding, you'll most likely find me playing video games or on the court shooting some hoops.",
    image: pictureOfMe      
}

const WEB = [ 
    {
        name: "CSS",
        level: "80",
        image: cssLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(10, 120, 205)",
    },
    {
        name: "HTML",
        level: "90",
        image: htmlLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(246, 104, 56)",
    },
    {
        name: "React",
        level: "75",
        image: reactLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(0, 182, 211)",
    },
    {
        name: "JQuery",
        level: "60",
        image: jqueryLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(70, 144, 200)",
    }
];

const PROGRAMMING = [ 
    {
        name: "Javascript",
        level: "80",
        image: javascriptLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(240, 197, 15)",
    },
    {
        name: "Java",
        level: "70",
        image: javaLogo,
        imageWidth: "40px",
        imageHeight: "40px",
        color: "rgb(245, 70, 36)",
    },
    {
        name: "C++",
        level: "80",
        image: cppLogo,
        imageWidth: "35px",
        imageHeight: "38px",
        color: "rgb(91, 151, 215)",
    },
    {
        name: "Python",
        level: "70",
        image: pythonLogo,
        imageWidth: "35px",
        imageHeight: "35px",
        color: "rgb(240, 197, 15)",
    }
];

const OTHER = [
    {
        name: "SQL",
        level: "72.5",
        image: SQLLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(255, 164, 0)",
    },
    {
        name: "Git + Github",
        level: "85",
        image: gitLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(230, 89, 0)",
    },
    {
        name: "VS Code",
        level: "90",
        image: VSCodeLogo,
        imageWidth: "38px",
        imageHeight: "38px",
        color: "rgb(4, 140, 210)",
    },
    {
        name: "Netbeans",
        level: "75",
        image: netbeansLogo,
        imageWidth: "33px",
        imageHeight: "37px",
        color: "rgb(159, 220, 0)",
    }
];

export const EXPERIENCES = [
    [PROGRAMMING, "Coding"],
    [WEB, "Web"],
    [OTHER, "Other"],
];

export const EMAILJS = {
    SERVICE_ID: "service_9qijcbj",
    USER_ID: "user_lttcoxsnlj4xL4ABRPMYo",
    ACCESS_TOKEN: "ccfd79b13f07e74b771add43be9d662d",
    TEMPLATE_ID: "template_jcwg87q"
}