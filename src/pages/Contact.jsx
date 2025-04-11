import { useState } from "react";


function Contact() {
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formMessage, setFormMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here

        if(formName === "" || formEmail === "" || formMessage === "") {
            document.getElementById("notice").innerText = "Please fill in all fields.";
            return;
        } else {
            document.getElementById("notice").innerText = "Thank you!";
        }

        console.log("Form submitted:", {
            name: formName,
            email: formEmail,
            message: formMessage,
        });
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg mb-8">Feel free to reach out!</p>
            <p id="notice"></p>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={
                            (event) => {
                                setFormName(event.target.value);
                            }
                        }
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={
                            (event) => {
                                setFormEmail(event.target.value);
                            }
                        }
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Your Message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={
                            (event) => {
                                setFormMessage(event.target.value);
                            }
                        }
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;