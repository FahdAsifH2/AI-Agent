require('dotenv').config();
const OpenAI = require("openai");
const API_KEY = process.env.OPENAI_API_KEY;

console.log(API_KEY); // This will print your API key to the console (for testing, avoid logging keys in production)

// this is the client with which I can interact with OpenAI API
const client = new OpenAI({
    apiKey: API_KEY,
});

// tools
function getWeatherDetails(city) {
    if (city.toLowerCase() == "patiala") {
        return "10*C";
    }
    if (city.toLowerCase() == "lahore") {
        return "12*C";
    }
    if (city.toLowerCase() == "delhi") {
        return "11*C";
    }
    if (city.toLowerCase() == "islamabad") {
        return "20*C";
    }
}

const user = "hey, what is the weather of Patiala?";

client.chat.completions.create({
    model: "gpt-3.5-turbo", // Use "gpt-3.5-turbo" if "gpt-4" is unavailable
    messages: [{ role: "user", content: user }],
})
.then(response => {
    console.log("Response from OpenAI:", response.choices[0].message.content);
})
.catch(error => {
    console.error("Error:", error);
});


