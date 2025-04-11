function Resume() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Resume</h1>
            <p className="mb-4">Here is a brief overview of my professional experience and skills.</p>
            <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Software Engineer at XYZ Company (2020 - Present)</li>
                <li>Web Developer at ABC Company (2018 - 2020)</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside mb-4">
                <li>JavaScript, React, Node.js, SQL, MongoDB</li>
                <li>HTML, CSS</li>
                <li>Typescript, Github</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Bachelor's Degree in Commerce from Delhi University (2001 - 2004)</li>
                <li>MBA in HR and Marketing from Indian Institute of Planning and Development (2005 - 2007)</li>
                <li>Software Engineering Bootcamp (2025)</li>
            </ul>
            <a href="./Resume.pdf" download> 
                <button className="pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Download Resume
                </button>
            </a>

        </div>
    ); 
}
export default Resume;