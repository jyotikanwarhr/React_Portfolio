import Card from "../components/Card.jsx";
import ReadMeGenerator from "../assets/ReadMeGenerator.png";
import WeatherForecast from "../assets/WeatherForecast.png";
import VehicleBuilder from "../assets/VehicleBuilder.png";


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
            title: "WeatherForecast ",
            description: "A weather dashboard that provides current weather and 5-day forecast",
            image: WeatherForecast,
            github: "https://github.com/jyotikanwarhr/WeatherForecast",
            deploy: "https://weatherforecast-un8n.onrender.com"
        },

        {
            title: "VehicleBuilder",
            description: "A vehicle builder application that allows users to customize and build their dream vehicles.",
            image: VehicleBuilder,
            github: "https://github.com/jyotikanwarhr/VehicleBuilderTypescript/tree/main?tab=readme-ov-file",
            deploy: "https://drive.google.com/file/d/1CTp2SA8x-3yNIL0SP61FQR713B0A21g6/view"
        }
    ]
    return (
        <div>
            <h1>This is the Portfolio Page</h1>


            <div className="card-container">
                
                <Card project={projects[0]}/>
                <Card project={projects[1]}/>
                <Card project={projects[2]}/>
                {/* //<Card />
                //<Card /> */}

            </div>


        </div>
    )
}

export default Portfolio;