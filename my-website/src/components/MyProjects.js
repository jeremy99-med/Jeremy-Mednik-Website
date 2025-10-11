import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import project1 from "../images/skills-images/awslogo.png";
import project2 from "../images/skills-images/csharplogo.png";
import project3 from "../images/skills-images/gitlogo.png";


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
      title: "Java",
      description: "First programming language learned, used in various projects and coursework including a current project to create a Chess game with AI opponent.",
      icon: project1,
  }
  const project2Card = {
    title: "C#",
    description: "Mostly used in my professional career for backend development with .NET and ASP.NET.", 
    icon: project2,
  }
  const project3Card = { 
    title: "Git",
    description: "Version control system used in nearly all of my projects, both personal and professional.",
    icon: project3,
  }
  const projectCards = [project1Card, project2Card, project3Card];

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
