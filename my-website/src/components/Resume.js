import resumePDF from "../images/resume/Jeremy_Mednik_Resume_Official.pdf";

function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className="resume mx-3 my-3">
                <a
                    href={resumePDF}
                    download="Jeremy_Mednik_Resume_Official.pdf"
                    className="resume-button"
                >
                    <span>Download my resume!</span>
                </a>
            </div>
        </section>
    );
};

export default Resume;