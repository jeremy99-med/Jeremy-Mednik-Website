import Cursor from "./Cursor";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyProjects from "./MyProjects";
import Resume from "./Resume";
import Footer from "./Footer";

function Website() {
  return (
    <div>
      <Cursor/>
      <Header/>
      <AboutMe/>
      <MyProjects/>
      <Skills/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default Website;
