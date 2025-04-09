import Card from "../components/Card";

function Portfolio() {

    const projects = [
        {
            title: "Project 1",
            description: "Description for project 1",
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