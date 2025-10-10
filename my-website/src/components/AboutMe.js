function AboutMe() {
    return (
        <section id="about-me">
            <div className="container">
                <div className="row align-items-center"> 
                    <div className="col-md-5">
                        <img src={require('../images/about-me.png')} alt="Jeremy Mednik" class="img-fluid rounded-circle mb-3" />
                    </div>
                    <div className="col-md-7">
                        <h2>About Me</h2>
                        <br></br>
                            <br></br>
                        <p>
                            {/* Add your personal introduction here */}
                            Welcome to my website! I'm Jeremy Mednik, an aspiring software developer with a passion for creating web applications and learning new technologies. I am currently pursuing obtaining a M.S. in Computer Science at American University. 
                            <br></br>
                            <br></br>
                            I created this website to showcase my skills, projects and experiences. If you'd like to get in touch, feel free to reach out via the contact information provided in the footer!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;