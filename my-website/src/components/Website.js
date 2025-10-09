import Header from "./Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyProjects from "./MyProjects";
import Resume from "./Resume";
import Footer from "./Footer";

function Website() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Skills/>
      <MyProjects/>
      <Resume/>
      <Footer/>
      <div className="App">
        <header className="App-header">
          <div className="App-logo" alt="logo" />
          <p>
            Edit React and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default Website;
