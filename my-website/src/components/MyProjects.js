import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import project1 from "../images/projects/nbastatviewer.png";
import project2 from "../images/projects/taskmanagement.png";
import project3 from "../images/projects/calculatorapp.png";
import project4 from "../images/projects/chessproject.png";



function MyProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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

  const project1Card = {
      title: "Sports Stats Viewer",
      description: "Using the public API provided by balldontlie.io, I created a web application that allows users to view NBA,NFL,MLB,NHL player statistics and game data. This project was built using React for the frontend, Flask and Python for the backend.",
      icon: project1,
      link: "https://github.com/jeremy99-med/NBA-Stat-Viewer"
  }
  const project2Card = {
    title: "Task Management App",
    description: "Created an executable task management application using Python and Tkinter. The app allows users to create, edit, and delete tasks, as well as set deadlines and priorities.", 
    icon: project2,
    link: 'https://github.com/jeremy99-med/Task-Management-App'
  }
  const project3Card = { 
    title: "Calculator App",
    description: "This is a simple calculator application built using javaScript, HTML, and CSS. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division.",
    icon: project3,
    link: "https://github.com/jeremy99-med/Calculator-Web-App"
  }
  const project4Card = { 
    title: "Chess Game with AI Opponent (In Progress)",
    description: "I plan on creating a chess game using Java that allows users to play against an AI opponent. The AI will use the minimax algorithm with alpha-beta pruning to make its moves.",
    icon: project4,
    link: "https://github.com/jeremy99-med/Java-Chess-Game"
  }
  const projectCards = [project1Card, project2Card, project3Card, project4Card];

  return (
    <section id="my-projects" className="my-5 text-center">
      <h2 className="mb-4">My Projects</h2>
      <div className="container">
        <Slider {...settings}>
            {projectCards.map((project, index) => (
                    <ProjectCard key={index} {...project} />
            ))}
        </Slider>
      </div>
    </section>
  );
}

export default MyProjects;
