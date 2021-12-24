// Hardcoded
import igemLogo from './images/igem_logo.svg';
import pictureOfMe from './images/pictureOfMe.jpeg';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.svg';
import reactLogo from './images/react_logo.png';
import jqueryLogo from './images/jquery_logo.png';

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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Laoreet non curabitur gravida arcu ac. Vulputate dignissim suspendisse in est ante in. Ultrices dui sapien eget mi proin sed libero enim sed. Etiam non quam lacus suspendisse faucibus interdum. Mauris a diam maecenas sed enim ut sem. Tristique senectus et netus et. Maecenas ultricies mi eget mauris pharetra. Ac turpis egestas maecenas pharetra convallis posuere morbi. Erat imperdiet sed euismod nisi.",
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
    },
];

const OTHER = [ 
    {
    },
];

export const EXPERIENCES = [
    [WEB, "Web"],
    [PROGRAMMING, "Coding"],
    [OTHER, "Other"],
];