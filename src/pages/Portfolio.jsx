import Card from "../components/Card.jsx";
import ReadMeGenerator from "../assets/ReadMeGenerator.png";

function Portfolio() {

    const projects = [
        {
            title: "ReadMe Generator",
            description: "Creates a professional README file for the project",
            image: ReadMeGenerator,
            github: "https://github.com/jyotikanwarhr/readMeGenerator/tree/main",
            deploy: "https://drive.google.com/file/d/1SUPSOk7X5N1RQ9Ki83lowmM4MeiV8Eu3/view"

        }, 
        {
            title: "Project 2",
            description: "Description for project 2",
        },
        {
            title: "Project 3",
            description: "Description for project 3",
        }
    ]


    return (
        <div>
            <h1>This is the Portfolio Page</h1>


            <div className="card-container">
                
                <Card project={projects[0]}/>
                <Card project={projects[1]}/>
                <Card />
                <Card />
                <Card />

            </div>


        </div>
    )
}

export default Portfolio;