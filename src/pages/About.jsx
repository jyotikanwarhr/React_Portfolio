import jkImage from '../assets/jk.jpg'; // Adjust the path based on the location of your image file

function About() {
    return (
        <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#1E3A8A' }}>About Me</h1>
            <div>
            <img src={jkImage} alt="My Picture"
            className="rounded-full w-32 h-28 mb-4"  // Adjust the size as needed
            // style={{ width: '200px', height: 'auto', borderRadius: '10px' }} // Adjusted size and added rounded corners
            style={{ 
                width: '200px', 
                height: '270px', 
                borderRadius: '10px', 
                display: 'block', 
                margin: '20px auto' // Centers the image horizontally and adds vertical spacing
            }} 
             />
            </div>
            <div>
            <p
            style={{
                padding: '20px', // Adds padding inside the paragraph
                margin: '20px',  // Adds margin outside the paragraph
                lineHeight: '1.6', // Improves readability
                textAlign: 'justify' // Justifies the text
            }}
            >  
            I was born and raised in Delhi, India, and moved to the United States in 2015 with my husband and our then 3-year-old son. Now a proud mom of two boys, aged 12 and 5, I've spent over a decade building my career in tech recruiting. 
            In 2023, like many others impacted by the shifting job market, I lost my position at Uber when my entire team was let go. 
            During that time, I explored new opportunities—including opening a play school—and completed a few courses, but things didn’t quite fall into place. 
            That’s when my husband encouraged me to pivot into IT. Inspired by the idea of building something new, I enrolled in the EDX Software Engineering Bootcamp from the University of Toronto, 
            marking the beginning of an exciting new chapter in my professional journey.
            </p>
            </div>
        </div>
        

    )
}

export default About;