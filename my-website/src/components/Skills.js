import SkillCard from "./SkillCard";
// Make sure icons are imported if they are in src/images
import jsIcon from "../images/skills-images/javascriptlogo.png";
import csharpIcon from "../images/skills-images/csharplogo.png";
import pythonIcon from "../images/skills-images/pythonlogo.png";
import javaIcon from "../images/skills-images/javalogo.png";
import htmlIcon from "../images/skills-images/htmllogo.png";
import cssIcon from "../images/skills-images/csslogo.png";
import sqlIcon from "../images/skills-images/sqllogo.png";
import gitIcon from "../images/skills-images/gitlogo.png";
import reactIcon from "../images/skills-images/Reactlogo.png";
import apiIcon from "../images/skills-images/restapilogo.png";
import awsIcon from "../images/skills-images/awslogo.png";
import Slider from "react-slick";

function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // for tablets and smaller
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const skillCardJavaScript = {
    title: "JavaScript",
    description:
      "Experienced in ES6+, React, Node.js, and modern web development.",
    icon: jsIcon,
    level: "Beginner",
  };

  const skillCardCSharp = {
    title: "C#",
    description:
      "Mostly used in my professional career for backend development with .NET and ASP.NET.",
    icon: csharpIcon,
    level: "Intermediate",
  };

  const skillCardPython = {
    title: "Python",
    description:
      "Used in various projects and coursework, including data analysis and web development with Flask.",
    icon: pythonIcon,
    level: "Intermediate",
  };

  const skillCardJava = {
    title: "Java",
    description:
      "First programming language learned, used in various projects and coursework including a current project to create a Chess game with AI opponent.",
    icon: javaIcon,
    level: "Intermediate",
  };

  const skillCardHTML = {
    title: "HTML",
    description:
      "Know the structure of web pages using semantic HTML5 elements.",
    icon: htmlIcon,
    level: "Advanced",
  };
  const skillCardCSS = {
    title: "CSS",
    description:
      "Familiar with modern CSS techniques including Flexbox, Grid, and responsive design.",
    icon: cssIcon,
    level: "Advanced",
  };
  const skillCardSQL = {
    title: "SQL",
    description:
      "Worked with MySQL and Microsft SQL Server in various projects and coursework.",
    icon: sqlIcon,
    level: "Intermediate",
  };
  const skillCardGit = {
    title: "Git",
    description:
      "Used Git for version control in all my projects, familiar with branching, merging, and pull requests.",
    icon: gitIcon,
    level: "Intermediate",
  };

  const skillCardReact = {
    title: "React",
    description:
      "Have built multiple projects using React, including this website. Comfortable with hooks, state management, and component-based architecture.",
    icon: reactIcon,
    level: "Intermediate",
  };

  const skillCardWebApi = {
    title: "RESTful Web APIs",
    description:
      "Implemented and used RESTful APIs in various projects, including a weather app, task manager and through my professional career.",
    icon: apiIcon,
    level: "Intermediate",
  };

  const skillCardAwS = {
    title: "AWS",
    description:
      "Taking an introductory course on AWS Cloud Practitioner to learn the basics of cloud computing and AWS services.",
    icon: awsIcon,
    level: "Beginner",
  };

  const skillCards = [
    skillCardJavaScript,
    skillCardCSharp,
    skillCardCSS,
    skillCardHTML,
    skillCardPython,
    skillCardJava,
    skillCardSQL,
    skillCardGit,
    skillCardReact,
    skillCardWebApi,
    skillCardAwS,
  ];

  return (
    <section id="skills" className="my-5 text-center">
      <h2 className="mb-4">Skills</h2>
      <div className="container">
        <Slider {...settings}>
            {skillCards.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
            ))}
        </Slider>
      </div>
    </section>
  );
}

export default Skills;
