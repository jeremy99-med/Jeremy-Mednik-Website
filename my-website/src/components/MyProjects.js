import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import project from "../images/projects/clipme.png";
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
      icon: project1,
      link: "https://github.com/jeremy99-med/NBA-Stat-Viewer",
      description: "Using the public API provided by balldontlie.io, I created a web application that allows users to view NBA,NFL,MLB,NHL player statistics and game data. This project was built using React for the frontend, Flask and Python for the backend. Users can search for players, view their season and career statistics, and filter data based on various criteria such as team, position, and date range. The application features a responsive design, ensuring a seamless experience across different devices."
  }
  const project2Card = {
    title: "Task Management App",
    icon: project2,
    link: 'https://github.com/jeremy99-med/Task-Management-App',
    description: "Created an executable task management application using Python and Tkinter. The app allows users to create, edit, and delete tasks, as well as set deadlines and priorities. Tasks are stored in a local SQLite database, ensuring data persistence between sessions. The user interface is designed to be intuitive and user-friendly, with features such as sorting and filtering tasks based on their status or priority level."
  }
  const project3Card = { 
    title: "Calculator App",
    icon: project3,
    link: "https://github.com/jeremy99-med/Calculator-Web-App",
    description: "This is a simple calculator application built using javaScript, HTML, and CSS. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The user interface is designed to be intuitive and user-friendly, with buttons for each digit and operation. The calculator also includes features such as clear and backspace functions to enhance usability."
  }
  const project4Card = { 
    title: "Chess Game with AI Opponent (In Progress)",
    icon: project4,
    link: "https://github.com/jeremy99-med/Java-Chess-Game",
    description: "I plan on creating a chess game using Java that allows users to play against an AI opponent. The AI will use the minimax algorithm with alpha-beta pruning to make its moves. The game will feature a graphical user interface (GUI) built with Java Swing, allowing players to interact with the chessboard and pieces visually. Additional features will include move validation, check/checkmate detection, and the ability to save and load games."
  }
const projectCard = { 
    title: "ClipME",
    icon: project,
    link: "#",
    description: "A website where users can publish reviews for websites and web applications. Users can rate the websites on various criteria such as usability, design, and content. The platform allows users to follow other users, comment on reviews, and share their favorite websites. The website is built using React for the frontend and Node.js with Django for the backend, with data stored in a AWS Aurora Postgres database."
}

  const projectCards = [projectCard,project1Card, project2Card, project3Card, project4Card];

  return (
    <section id="my-projects" className="my-5 text-center">
      <h2 className="mb-4">My Projects</h2>
      <div className="container">
        <Slider {...settings}>
  {projectCards.map((project, index) => (
    <ProjectCard
      key={index}
      modalId={`projectModal-${index}`}
      {...project}
    />
  ))}
</Slider>

      </div>
    </section>
  );
}

export default MyProjects;
